import urllib.request
import os

URLS = {
    "openai_logo.png": "https://raw.githubusercontent.com/lobehub/lobe-icons/main/packages/static-png/dark/openai.png",
    "anthropic_logo.png": "https://raw.githubusercontent.com/lobehub/lobe-icons/main/packages/static-png/dark/anthropic.png",
    "claude_logo.png": "https://raw.githubusercontent.com/lobehub/lobe-icons/main/packages/static-png/dark/claude-color.png",
    "blender_logo.png": "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/blender.png",
    "unreal_logo.png": "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/unreal-engine.png",
    "xai_logo.png": "https://raw.githubusercontent.com/lobehub/lobe-icons/main/packages/static-png/dark/xai.png"
}

out_dir = r"C:\Users\atiqu\.gemini\antigravity\scratch\gpt6-vs-fable-remotion\public\logos"
os.makedirs(out_dir, exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0'}

for name, url in URLS.items():
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(os.path.join(out_dir, name), 'wb') as f:
            data = resp.read()
            f.write(data)
            print(f"Downloaded {name} successfully: {len(data)} bytes")
    except Exception as e:
        print(f"Error {name}: {e}")
