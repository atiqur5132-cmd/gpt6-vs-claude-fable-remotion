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
SRC_DIR = os.path.join(SCRIPT_DIR, "src")
os.makedirs(PUBLIC_DIR, exist_ok=True)
os.makedirs(SRC_DIR, exist_ok=True)

raw_mp3 = os.path.join(PUBLIC_DIR, "raw_opus55.mp3")
mastered_wav = os.path.join(PUBLIC_DIR, "opus55_voiceover.wav")
timestamps_json = os.path.join(PUBLIC_DIR, "opus55_timestamps.json")
src_timestamps_json = os.path.join(SRC_DIR, "opus55_timestamps.json")

# Factually corrected script:
# GPT-6 Astra was ALREADY reigning champion; Opus 5.5 was Anthropic's sudden ambush weapon.
script_text = """For months, OpenAI's GPT-6 Astra and Sol stood unchallenged at the absolute peak of the AI world.

Holding the crown for blistering speed and multi-modal supremacy, Silicon Valley believed the frontier race was settled.

Then, without a single press release or keynote, Anthropic dropped Claude Opus 5.5 directly into production.

An ambush weapon engineered for one purpose: to shatter Astra's monopoly on complex 3D physics and software engineering.

When developers pitted both flagships against identical real-world benchmarks, the numbers revealed a shocking paradox.

Claude Opus 5.5 obliterated Astra in visual fidelity, spatial coherence, and single-pass precision.

But it did so at a cost that nobody in the industry anticipated: an eighteen-minute wait time, and eighty thousand thinking tokens.

To understand why developers are losing their minds over Opus 5.5, you have to look at the Minecraft test.

For months, AI enthusiasts used complex three-dimensional voxel generation as the ultimate boundary test for large language models.

Previous generational models produced broken meshes, missing face culling, and static cubes floating in a vacuum.

Then, researcher Noah Wachnik and developer Jazii handed Claude Opus 5.5 a single, unconstrained prompt inside Claude Artifacts.

Zero external libraries. Zero pre-compiled physics engines.

In a single pass, Opus 5.5 compiled a fully interactive, playable Minecraft clone.

It didn't just render terrain blocks. The model implemented procedural chunk generation, dynamic block collision, real-time lighting shaders, and most astonishingly: realistic fluid dynamics with computational water physics.

When developer Vib3Coded ran the sunset pirate ship benchmark, generating two galleons sailing through rolling ocean waves inside a single HTML file, the contrast was undeniable.

GPT-6 Astra produced immaculate deck rigging and faster initial frames.

But Opus 5.5 synthesized true hydrodynamic foam, volumetric wave crests, and atmospheric twilight that looked like a boutique game studio had worked on it for months.

Yet behind this staggering visual fidelity lies the central controversy dividing the developer community.

Developer Wësche ran a ruthless head-to-head evaluation between Claude Opus 5.5 and GPT-6 Sol using an identical volcano island simulation prompt.

The telemetry numbers exposed two radically different engineering philosophies.

Opus 5.5 spent a grueling eighteen point eight minutes running. It consumed one hundred and twenty-three thousand tokens, with eighty thousand of those tokens dedicated entirely to internal chain-of-thought deliberation.

The result was breathtaking: multi-layered volcanic strata, procedural ash clouds, and thermal particle dispersion.

Then look at GPT-6 Sol.

Sol completed the entire assignment in one point seven minutes. It consumed just eleven point seven thousand tokens, spending less than two thousand tokens on internal reasoning.

And here is the critical kicker: Sol's volcano actually erupted on schedule, on the first try, with zero syntax errors.

This is the philosophical divide of 2026.

Anthropic designed Opus 5.5 for uncompromising, human-free perfection: give the model unlimited thinking tokens, and it will design a flawless digital cathedral.

OpenAI designed GPT-6 Sol with latent reasoning: an ultra-fast, token-efficient workhorse that gets you ninety percent of the result in one-tenth of the time.

The confrontation is no longer confined to lightweight browser scripts.

The real war is unfolding inside Hollywood-grade three-dimensional production pipelines.

Through the open-source Model Context Protocol, developers connected both frontier models directly to professional 3D software.

Developer Stefan 3D AI handed Opus 5.5 a brutal cinematic prompt: build the iconic DeLorean and the clock tower square from Back to the Future, rig the vehicle's suspension, and animate a dynamic lightning strike using the Higgsfield Blender plugin.

Opus 5.5 drove the Blender API autonomously. It calculated geometric pivot points, parented suspension armature bones, and keyed particle lighting curves without a single human intervention.

Meanwhile, over at Higgsfield AI, researchers tested Claude Opus 5.5 against GPT-6 Sol inside Unreal Engine for procedural samurai game mechanics.

Opus 5.5 demonstrated an uncanny grasp of spatial physics, calculating weapon hitboxes and cloth kinematics that previous models invariably corrupted.

For 3D artists, game designers, and VFX supervisors, the barrier between a spoken text description and a compiled, production-ready asset has effectively evaporated.

With technical capabilities soaring, the frontier labs shifted their battle into economic warfare.

In a sudden defensive maneuver, Anthropic slashed Opus pricing by nearly thirty percent, establishing a new utility baseline of four dollars per million input tokens and twenty dollars per million output tokens.

OpenAI responded by fragmenting their frontier stack: Astra remains the premium multimodal agent, while GPT-6 Sol and Luna are aggressively priced to undercut every competing mid-tier model on the market.

And just as developers thought the pricing landscape was settled, Elon Musk and xAI detonated a financial grenade.

xAI rolled out Grok 4.7 with native integration into Cursor, Grok Build, and developer APIs.

On the independent Artificial Analysis Coding Agent Index, Grok Build completed full benchmark suites for twenty-seven hundred dollars, compared to thirty-eight hundred dollars for Claude Code with Fable 5.1.

Elon publicly revealed that Grok 4.7 achieved a seventy-one percent score on DeepSWE and over forty-six percent on CursorBench, beating GPT-5.6 Sol while costing up to ten times less than flagship tier models.

Musk added that Grok 4.8 is already training, and Grok 4.9 will directly challenge Astra and Opus on multimodal reasoning.

The price of frontier intelligence is plunging faster than hardware manufacturers can produce silicon.

So when the dust settles across the benchmarks, which model should you actually build with?

The comprehensive evaluations on Night Train and Bridgebench give us an unambiguous roadmap.

If your workflow demands absolute single-shot perfection, if you are building sovereign coding agents, complex 3D engine physics, or unassisted software architectures where human debugging is impossible, Claude Opus 5.5 is currently without equal on Earth.

You pay with latency, and you pay with token volume, but the spatial depth is unmatched.

However, if you are building interactive consumer applications, automated customer workflows, or high-speed development loops where latency under two minutes is non-negotiable, GPT-6 Sol is the clear operational winner.

It delivers elite reasoning at fractional compute, proving that speed and cost efficiency can defeat brute-force thinking depth.

The frontier AI war is no longer about who has the smartest chatbot.

It is an all-out computational arms race between Anthropic's deep architectural perfection, OpenAI's latent speed, and xAI's brutal economic efficiency.

And as these models continue to devour every legacy software barrier in their path, one thing is abundantly clear:

The world of digital creation will never be the same again."""

VOICE = "en-US-BrianMultilingualNeural"

async def generate_tts():
    print(f"[1/3] Synthesizing Voiceover with {VOICE}...")
    communicate = edge_tts.Communicate(script_text, VOICE, rate="+3%", pitch="+0Hz")
    await communicate.save(raw_mp3)
    print(f"Raw voiceover saved: {raw_mp3}")

def master_audio():
    print("[2/3] Mastering Audio with Studio Broadcast EQ, Vocal Punch, and Loudnorm...")
    cmd = [
        "ffmpeg", "-y",
        "-i", raw_mp3,
        "-af", (
            "highpass=f=80,"
            "equalizer=f=120:width_type=h:width=100:g=2.5,"
            "equalizer=f=800:width_type=h:width=200:g=-1.5,"
            "equalizer=f=4500:width_type=h:width=2000:g=2.2,"
            "acompressor=threshold=-18dB:ratio=3.2:attack=8:release=60,"
            "loudnorm=I=-16:TP=-1.0:LRA=9"
        ),
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
        "durationSeconds": round(duration, 2),
        "totalFrames": total_frames,
        "fps": 30,
        "voice": VOICE,
        "segments": segments_data
    }
    
    with open(timestamps_json, "w", encoding="utf-8") as f:
        json.dump(final_output, f, indent=2)
        
    with open(src_timestamps_json, "w", encoding="utf-8") as f:
        json.dump(final_output, f, indent=2)
        
    print(f"Transcription saved to {timestamps_json} and {src_timestamps_json}")
    print(f"Total Segments: {len(segments_data)} | Total Frames @ 30FPS: {total_frames}")

async def main():
    await generate_tts()
    duration = master_audio()
    transcribe_audio(duration)
    print("DONE! Audio production pipeline completed successfully.")

if __name__ == "__main__":
    asyncio.run(main())
