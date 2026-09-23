import json

with open('src/opus55_timestamps.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

print(f"Total Segments: {len(d['segments'])}, Total Frames: {d['totalFrames']}")

for i, s in enumerate(d['segments']):
    print(f"{i:2d} | [{s['startFrame']:5d} - {s['endFrame']:5d}] ({s['endFrame']-s['startFrame']:4d}f) | {s['text']}")
