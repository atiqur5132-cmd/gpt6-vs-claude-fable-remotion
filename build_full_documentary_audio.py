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

raw_mp3 = os.path.join(PUBLIC_DIR, "raw_documentary.mp3")
mastered_wav = os.path.join(PUBLIC_DIR, "documentary_voiceover.wav")
timestamps_json = os.path.join(PUBLIC_DIR, "documentary_timestamps.json")

script_text = """Right now, the largest artificial intelligence labs in the world are publicly pleading for regulation, while redlining their computational clusters behind closed doors.

Over the weekend, Anthropic CEO Dario Amodei went on record warning that frontier AI is advancing at a velocity humanity is entirely unprepared to control. Within hours of that statement, Anthropic quietly deployed Claude Opus 5.2 and Fable 5.2 directly to production to capture top software engineering benchmarks.

OpenAI CEO Sam Altman publicly echoed Dario's warnings, urging caution. Within forty-eight hours, OpenAI countered with GPT-6 Astra, while internal leaks revealed they are already staging GPT-6 Sol inside private API routes.

Elon Musk chimed in, agreeing that frontier pacing is critical, while immediately accelerating xAI's deployment of Grok 4.7.

Silicon Valley is preaching safety to the cameras, while nobody's foot is anywhere near the brake pedal.

And the reason they are terrified of pausing for even a single week... is because the definition of software generation just fundamentally mutated.

For months, OpenAI engineers tested a secretive internal checkpoint codenamed mozaik-alpha-fdm. When this architecture finally surfaced as GPT-6 Astra, the industry assumed it represented the absolute outer boundary of OpenAI's technical roadmap.

Then the internal API leaks began.

Developers inspecting early gateway endpoints and arena testing spotted an unreleased model tag: gpt-6-sol.

Initial telemetry reveals why engineers are so alarmed. Sol is not a stripped-down lightweight derivative. It matches Astra's multi-step reasoning depth, but slashes token latency by nearly seventy percent.

By pricing it in line with standard utility tiers, OpenAI is preparing to deploy a frontier engine that makes previous generational flagships obsolete overnight.

To understand why this internal escalation is happening, you have to look at what developers are actually producing with Astra.

Consider this demonstration by researcher noclipepe.

He fed GPT-6 Astra a single, unannotated gameplay video of a Steam fishing game called How to Fish. The model was not given source code, API documentation, or pre-rendered assets.

In a single pass, Astra reconstructed the game from scratch.

It didn't just render static geometry. The model generated bending rod physics, dynamic fishing line tension, underwater fish collision meshes, and six distinct behavioral AI species. It built inventory persistence, money systems, and dynamic cooking mechanics.

Video footage in. Fully compiled, playable physics simulation out.

Then came the Mario Kart demonstration by Lumina.

Using Astra Pro, they generated a complete, playable 3D kart racing game inside a single, self-contained HTML file.

Four distinct courses. Eight interactive playable characters. AI opponents that calculate slipstreams, dynamic item boxes, and procedural audio synthesis.

The entire application was generated in under one hour, for eight dollars and fifty cents in API compute.

Think about the structural implications of that metric. An indie development sprint that previously demanded six months of engineering, asset modeling, and physics debugging was executed during a lunch break for less than the price of a sandwich.

And this brings us to the real fracture line across the developer community: the two-hundred-dollar subscription trap.

For the past year, closed frontier providers convinced developers that high-order spatial intelligence required an enterprise paywall. If you wanted procedural 3D logic and agentic autonomy, you had to pay two hundred dollars a month for closed APIs.

This week, that narrative completely fractured.

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
    print("[1/3] Synthesizing voiceover with en-US-BrianMultilingualNeural...")
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
    print(f"Transcription complete!")
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
