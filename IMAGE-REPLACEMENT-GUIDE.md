# Image Replacement Guide

## Favicon
| Item | Details |
| --- | --- |
| Image | Safety helmet with shield, or a KP monogram |
| Filename | `favicon.png` (32 × 32 or 48 × 48 px) |
| Location | `public/favicon.png` |

After adding it, change `href=""` to `href="/favicon.png"` in the favicon `<link>` in `index.html`.

## Content images
All images are real PNG files in `public/images/`, shown with normal `<img>` tags and referenced as `/images/<name>.png`. **The files currently there are temporary neutral placeholders** (grey, labelled with their filename). To replace one, save your own photo over the same filename (keep `.png`, or change the extension in `src/data.js`). No code change is needed. Hard-refresh the browser after replacing.

| Section | Image | File in `public/images/` | Size | Path set in |
| --- | --- | --- | --- | --- |
| Hero (circle) | Safety officer at work | `hero-safety-officer.png` | 800 × 800, 1:1 | `index.html` |
| Summary: Safety Officer | Site safety inspection | `safety-inspection.png` | 1200 × 750, 16:10 | `index.html` |
| Summary: Safety Officer | Toolbox talk / induction | `toolbox-talk.png` | 16:10 | `index.html` |
| Summary: Safety Officer | PPE compliance, work at height | `ppe-compliance.png` | 16:10 | `index.html` |
| Summary: IOCL | Industrial safety inspection | `iocl-industrial-safety.png` | 16:10 | `index.html` |
| Summary: IOCL | Fire safety, emergency preparedness | `fire-safety.png` | 16:10 | `index.html` |
| Summary: IOCL | Industrial PPE, safe work practices | `industrial-ppe.png` | 16:10 | `index.html` |
| Summary: ADIS | Industrial safety training | `adis-training.png` | 16:10 | `index.html` |
| Summary: ADIS | HIRA and risk assessment | `hira-risk-assessment.png` | 16:10 | `index.html` |
| Summary: ADIS | Safety procedures, practical learning | `safety-practical-training.png` | 16:10 | `index.html` |
| Qualifications card 1 (circle) | College, workshop or campus | `mechanical-engineering.png` | 600 × 600, 1:1 | `index.html` |
| Qualifications card 2 (circle) | Safety training or lab | `industrial-safety-education.png` | 1:1 | `index.html` |
| Qualifications card 3 (circle) | Industrial facility / inspection | `iocl-apprenticeship.png` | 1:1 | `index.html` |

All image paths are in `index.html` (each image has a comment or `<img src>` you can edit). Centre the subject in square images, since circles crop the corners. Use only your own photos, and avoid confidential workplace images without authorization.
