"""Fetch vivid Wikipedia summary photos from zh/de/fr/en Wikipedia CDN and generate verification sheet."""

import glob
import json
import os
import urllib.parse
import urllib.request
from PIL import Image, ImageDraw

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MEDIA_DIR = os.path.join(ROOT, "assets", "media", "plants")
HEADERS = {
    "User-Agent": "PlantingTipsPrototype/1.0 (https://github.com/example/planting-tips; educational project)"
}

# Use Wikipedia articles whose lead summary thumbnail is a vivid photograph rather than a botanical drawing
PHOTO_OVERRIDES = [
    ("cilantro", "https://fr.wikipedia.org/api/rest_v1/page/summary/Coriandre"),
    ("dill", "https://de.wikipedia.org/api/rest_v1/page/summary/Dill_(Pflanze)"),
    ("garlic", "https://fr.wikipedia.org/api/rest_v1/page/summary/Ail_cultiv%C3%A9"),
    ("ginger", "https://fr.wikipedia.org/api/rest_v1/page/summary/Gingembre"),
    ("lavender", "https://fr.wikipedia.org/api/rest_v1/page/summary/Lavandula_angustifolia"),
]


def main():
    meta_path = os.path.join(MEDIA_DIR, "wiki_attribution.json")
    with open(meta_path, "r", encoding="utf-8") as f:
        meta = json.load(f)

    for pid, api_url in PHOTO_OVERRIDES:
        try:
            req = urllib.request.Request(api_url, headers=HEADERS)
            info = json.loads(urllib.request.urlopen(req, timeout=15).read().decode("utf-8"))
            img_url = info.get("thumbnail", {}).get("source")
            if img_url and "kohler" not in img_url.lower() and "köhler" not in img_url.lower():
                dest = os.path.join(MEDIA_DIR, f"{pid}.jpg")
                raw = urllib.request.urlopen(urllib.request.Request(img_url, headers=HEADERS), timeout=20).read()
                with open(dest, "wb") as f:
                    f.write(raw)
                im = Image.open(dest).convert("RGB")
                im.save(dest, "JPEG", quality=85)
                meta[pid]["thumb_source"] = img_url
                print(f"PHOTO_OK | {pid:24s} | {im.size} | {img_url}")
        except Exception as e:
            print(f"SKIP {pid}: {e}")

    with open(meta_path, "w", encoding="utf-8") as f:
        json.dump(meta, f, ensure_ascii=False, indent=2)
    print("Updated wiki_attribution.json.")


if __name__ == "__main__":
    main()
