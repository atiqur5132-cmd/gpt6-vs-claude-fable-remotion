import asyncio
import os
import subprocess
import json
import edge_tts
import imageio_ffmpeg
from faster_whisper import WhisperModel

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PUBLIC_DIR = os.path.join(SCRIPT_DIR, "public")
os.makedirs(PUBLIC_DIR, exist_ok=True)

raw_mp3 = os.path.join(PUBLIC_DIR, "raw_documentary.mp3")
mastered_wav = os.path.join(PUBLIC_DIR, "documentary_voiceover.wav")
timestamps_json = os.path.join(PUBLIC_DIR, "documentary_timestamps.json")

# Script strictly crafted for 5+ minutes (800+ words, high-density documentary journalism)
script_text = """Right now, the largest artificial intelligence labs in the world are publicly pleading for regulation, while redlining their server clusters behind closed doors.

Over the weekend, Anthropic CEO Dario Amodei warned that frontier AI is advancing at a pace humanity is completely unprepared to control. Within hours of that statement, Anthropic pushed Claude Opus 5.2 and Fable 5.2 directly to production to capture top software engineering benchmarks.

OpenAI CEO Sam Altman publicly echoed Dario's warnings about safety. Within forty-eight hours, OpenAI countered with GPT-6 Astra, and behind closed doors, internal leaks revealed they are already testing GPT-6 Sol.

Elon Musk agreed that frontier pacing is critical, while quietly accelerating the deployment of xAI's Grok 4.7.

Silicon Valley is preaching caution to the cameras, while nobody's foot is anywhere near the brake pedal.

And the reason they are terrified of pausing for even a single week... is because the definition of software generation just fundamentally mutated.

For months, OpenAI was internally testing a secretive checkpoint codenamed mozaik-alpha-fdm. When this architecture finally surfaced as GPT-6 Astra, the industry assumed it was the pinnacle of OpenAI's technical roadmap.

Then the internal API leaks began.

Developers inspecting early gateway endpoints and arena testing spotted an unreleased model tag: gpt-6-sol.

Initial telemetry reveals why engineers are so alarmed. Sol is not a stripped-down lightweight derivative. It matches Astra's multi-step reasoning depth, but slashes token latency by nearly seventy percent.

By pricing it in line with standard utility tiers, OpenAI is preparing to release a frontier engine that makes previous generational flagships obsolete overnight.

To understand why this internal escalation is happening, you have to look at what developers are actually producing with Astra.

Consider this demonstration by researcher noclipepe.

He fed GPT-6 Astra a single, unannotated gameplay video of a Steam fishing game called How to Fish. The model was not given source code, API documentation, or 3D assets.

In a single pass, Astra reconstructed the game from scratch.

It didn't just render static geometry. The model generated bending rod physics, dynamic fishing line tension, underwater fish collision meshes, and six distinct behavioral AI species. It built inventory persistence, money systems, and even dynamic cooking mechanics.

Video footage in. Fully compiled, playable physics simulation out.

Then came the Mario Kart demonstration by Lumina.

Using Astra Pro, they generated a complete, playable 3D kart racing game inside a single, self-contained HTML file.

Four distinct courses. Eight interactive playable characters. AI opponents that calculate slipstreams, dynamic item boxes, and procedural audio synthesis.

The entire application was generated in under one hour, for eight dollars and fifty cents in API compute.

Think about the structural implications of that metric. An indie development sprint that previously demanded six months of engineering, asset modeling, and physics debugging was executed during a lunch break for less than the price of a sandwich.

And this brings us to the real fracture line across the developer community: the two-hundred-dollar subscription trap.

For the past year, closed frontier providers convinced developers that high-order spatial intelligence required an enterprise paywall. If you wanted procedural 3D logic and agentic autonomy, you had to pay two hundred dollars a month for closed APIs.

This week, that narrative collapsed.

Developer Max conducted a blind benchmark across what the industry considers budget tiers: DeepSeek V4.1 Flash, Google's Gemini 3.8 Flash, and Muse Spark.

The prompt demanded a complete, real-time WebGL reef simulation with particle kinematics and volumetric lighting.

DeepSeek V4.1 Flash didn't just pass the test. When prompted with live shader modifications, it recompiled and hot-reloaded the entire physics pipeline in under two seconds. The simulation locked at sixty frames per second on local consumer hardware.

At the same time, DeepSeek released deepseek-harness: an open-source, modular framework designed to replace proprietary coding agent platforms entirely. Every module is an extensible plugin. Zero proprietary lock-in. Zero monthly platform toll.

Meanwhile, Google is preparing its own counter-offensive.

Developer leaks by Salio uncovered internal registry tags for antigravity-preview-09-2026 alongside early builds of Gemini 4 Flash. Google is redesigning its entire compiler stack around persistent autonomous agents that execute directly within developer IDEs.

And that points to the ultimate shift of the 2026 AI war.

Sam Altman recently admitted in an interview: Every night, I have a few thousand autonomous agents running with GPT-6 Astra. Thousands of agents writing code, running unit tests, and iterating architecture while humans sleep.

We have officially transitioned from the era of conversational chatbots to ambient autonomous execution swarms.

The competitive moat around closed frontier models is evaporating. When sub-cent open architectures can generate physics engines, and open frameworks orchestrate thousands of agents overnight, intelligence is no longer scarce.

The developers who dominate the next decade won't be the ones paying two-hundred-dollar tolls to closed corporate monopolies.

They will be the engineers who master autonomous execution."""

async def generate_tts():
    print(f"[1/3] Generating voiceover with en-US-BrianMultilingualNeural...")
    communicate = edge_tts.Communicate(
        text=script_text,
        voice="en-US-BrianMultilingualNeural",
        rate="+0%",
        pitch="+0Hz"
    )
    await communicate.save(raw_mp3)
    print(f"Raw MP3 saved to {raw_mp3}")

def master_audio():
    print(f"[2/3] Mastering audio with FFmpeg loudnorm...")
    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    cmd = [
        ffmpeg_exe, "-y",
        "-i", raw_mp3,
        "-af", "loudnorm=I=-16:TP=-1.5:LRA=11",
        "-ar", "48000",
        "-ac", "2",
        mastered_wav
    ]
    subprocess.run(cmd, check=True)
    print(f"Mastered WAV saved to {mastered_wav}")

def transcribe_audio():
    print(f"[3/3] Transcribing with Faster-Whisper (base.en)...")
    model = WhisperModel("base.en", device="cpu", compute_type="int8")
    segments, info = model.transcribe(mastered_wav, beam_size=5, word_timestamps=True)
    
    results = {
        "language": info.language,
        "duration": info.duration,
        "totalFrames": int(round(info.duration * 30)),
        "segments": []
    }
    
    for s in segments:
        words = []
        if s.words:
            for w in s.words:
                words.append({
                    "word": w.word,
                    "start": round(w.start, 2),
                    "end": round(w.end, 2),
                    "startFrame": int(round(w.start * 30)),
                    "endFrame": int(round(w.end * 30)),
                })
        results["segments"].append({
            "id": s.id,
            "start": round(s.start, 2),
            "end": round(s.end, 2),
            "startFrame": int(round(s.start * 30)),
            "endFrame": int(round(s.end * 30)),
            "text": s.text.strip(),
            "words": words
        })
        
    with open(timestamps_json, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2)
        
    print(f"\n========================================================")
    print(f" Audio Generation Complete!")
    print(f" Duration: {round(info.duration, 2)}s ({round(info.duration/60, 2)} minutes)")
    print(f" Total Frames @ 30fps: {results['totalFrames']}")
    print(f" Meets > 5 minutes requirement: {info.duration > 300}")
    print(f" Timestamps saved to: {timestamps_json}")
    print(f"========================================================\n")

if __name__ == "__main__":
    asyncio.run(generate_tts())
    master_audio()
    transcribe_audio()
