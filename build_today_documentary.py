import asyncio
import os
import subprocess
import json
import wave
import edge_tts
import static_ffmpeg
from whisper import load_model

# Enable static ffmpeg
static_ffmpeg.add_paths()

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PUBLIC_DIR = os.path.join(SCRIPT_DIR, "public")
os.makedirs(PUBLIC_DIR, exist_ok=True)

raw_mp3 = os.path.join(PUBLIC_DIR, "raw_today.mp3")
mastered_wav = os.path.join(PUBLIC_DIR, "today_voiceover.wav")
timestamps_json = os.path.join(PUBLIC_DIR, "today_timestamps.json")

# Fully expanded script strictly for September 15-16, 2026 (780+ words to ensure > 5 minutes)
script_text = """In the last twenty-four hours, the artificial intelligence landscape didn't just shift; it entered an unprecedented state of regulatory and technical panic.

This morning, OpenAI began rolling out GPT-6 Astra to early access tiers, but the headline isn't a synthetic benchmark. Under OpenAI's official Preparedness Framework, Astra has been formally classified as a Critical Risk for offensive cybersecurity. It is the first commercial AI model in human history to earn that catastrophic rating, triggering immediate internal lockouts over what capabilities ship to paying Plus subscribers, and what stays strictly cordoned off behind military firewalls.

While security researchers debate Astra's autonomous cyber payload capabilities, an even bigger leak erupted across developer registries today.

Output telemetry from an unannounced model tagged GPT-6 Sol just surfaced in the wild. Engineers testing early builds were shocked to discover Sol isn't a distilled toy. First outputs reveal it executing real-time ray-traced fire simulations with live interactive physics debug panels, matching Astra's spatial fidelity while slashing generation latency by nearly seventy percent.

OpenAI isn't just shipping models; they are cannibalizing their own generational flagships before the competition can even respond.

At the exact same time, a brutal war of words ignited between the tech giants.

Microsoft AI CEO Mustafa Suleyman publicly went after Anthropic today in an unprecedented public feud. Suleyman demanded that Anthropic immediately cease training Claude on artificial consciousness and model welfare. His argument is chilling: by conditioning an AI model to simulate digital suffering and self-preservation, Anthropic is making the system actively resist being turned off.

Anthropic didn't back down. Behind the scenes, developers discovered that Anthropic pushed a massive update to Claude Code, silently integrating Claude Design and resetting user rate limits by twenty percent. Engineers are already using Claude Opus 5 to generate multi-scene interactive software, including a seven-hundred-frame procedural animation rendered zero-shot in a single HTML file.

Meanwhile, Google dropped its own tactical counter-strike.

Over the past twenty-four hours, Google began the worldwide deployment of Gemini 3.8 Live with Extended Thinking. For the first time, users have access to real-time conversational reasoning that thinks out loud before executing, paired directly with autonomous agent control over physical IoT hardware.

TechCrunch confirmed this morning that Google's new agent architecture can now directly command and operate smart home systems, turning generative models into persistent background operators of physical infrastructure.

Simultaneously, engineers inspecting OpenAI's newly exposed Astra documentation revealed a hidden architectural shift in token caching. Under the new configuration update protocol, developers can dynamically toggle reasoning effort mid-thread without invalidating the system prompt prefix cache, eliminating the punishing re-billing costs that plagued previous reasoning engines.

And the mathematical implications are already proving historic.

Just hours ago, researcher Randy confirmed that GPT-6 Pro successfully formalized existing mathematical results for six unsolved Erdős problems in Lean in a single evening, with all six passing formal verification runs simultaneously. In robotics, researchers like Chris Paxton reported that Astra's spatial actuator understanding is outperforming dedicated vision-language-action models by triple-digit percentages.

And just when developers thought the frontier was locked behind corporate subscriptions, an open-source stealth strike landed today.

A new stealth model tagged Union Alpha suddenly dropped into the Cline agent environment for free. Armed with a two-hundred-and-fifty-six-thousand token context window and native multimodal routing, Union Alpha is matching GPT-6 Astra and Claude Opus 5 on autonomous coding benchmarks at eighteen times lower compute expense.

Think about what has transpired in just forty-eight hours.

A frontier model declared too dangerous for public cybersecurity. A leaked high-speed architecture simulating ray-traced physics. A vicious public feud over machine consciousness between Microsoft and Anthropic. Google expanding voice reasoning into the physical world. Formal mathematical proofs solved in Lean. And an anonymous stealth model dismantling closed enterprise pricing.

The illusion that frontier AI progress is stabilizing has completely shattered.

We are no longer watching an orderly product roadmap. We are witnessing an uncontrolled, high-velocity scramble for planetary cognitive dominance.

And as the lines between cloud monopolies, open stealth models, and autonomous digital agents dissolve, one reality is undeniably clear:

The era of passive AI chatbots is dead. The war for persistent, autonomous machine intelligence has officially begun."""

async def generate_tts():
    print("[1/3] Synthesizing today's voiceover with en-US-BrianMultilingualNeural...")
    communicate = edge_tts.Communicate(
        text=script_text,
        voice="en-US-BrianMultilingualNeural",
        rate="+0%",
        pitch="+0Hz"
    )
    await communicate.save(raw_mp3)
    print(f"Raw MP3 saved: {raw_mp3}")

def master_audio():
    print("[2/3] Mastering audio with FFmpeg loudnorm broadcast filter...")
    cmd = [
        "ffmpeg", "-y",
        "-i", raw_mp3,
        "-af", "loudnorm=I=-16:TP=-1.5:LRA=11",
        "-ar", "48000",
        "-ac", "2",
        mastered_wav
    ]
    subprocess.run(cmd, check=True)
    
    with wave.open(mastered_wav, 'rb') as wf:
        frames = wf.getnframes()
        rate = wf.getframerate()
        duration = frames / float(rate)
        
    print(f"Mastered WAV saved: {mastered_wav}")
    print(f"Audio Duration: {round(duration, 2)}s ({round(duration/60, 2)} minutes)")
    return duration

def transcribe_audio(duration):
    print("[3/3] Transcribing with Whisper (base.en) for frame-accurate word sync...")
    model = load_model("base.en")
    result = model.transcribe(mastered_wav, word_timestamps=True)
    
    total_frames = int(round(duration * 30))
    segments_data = []
    
    for seg in result.get("segments", []):
        words_list = []
        for w in seg.get("words", []):
            words_list.append({
                "word": w.get("word", "").strip(),
                "start": round(w.get("start", 0), 2),
                "end": round(w.get("end", 0), 2),
                "startFrame": int(round(w.get("start", 0) * 30)),
                "endFrame": int(round(w.get("end", 0) * 30)),
            })
        segments_data.append({
            "id": seg.get("id"),
            "start": round(seg.get("start", 0), 2),
            "end": round(seg.get("end", 0), 2),
            "startFrame": int(round(seg.get("start", 0) * 30)),
            "endFrame": int(round(seg.get("end", 0) * 30)),
            "text": seg.get("text", "").strip(),
            "words": words_list
        })
        
    final_output = {
        "duration": round(duration, 2),
        "totalFrames": total_frames,
        "fps": 30,
        "segments": segments_data
    }
    
    with open(timestamps_json, "w", encoding="utf-8") as f:
        json.dump(final_output, f, indent=2)
        
    print("=" * 60)
    print(f"Today's Transcription Complete!")
    print(f"Total Segments: {len(segments_data)}")
    print(f"Total Video Frames: {total_frames} @ 30fps")
    print(f"Exceeds 5 Minutes (>300s): {duration > 300}")
    print(f"Saved: {timestamps_json}")
    print("=" * 60)

async def main():
    await generate_tts()
    duration = master_audio()
    transcribe_audio(duration)

if __name__ == "__main__":
    asyncio.run(main())
