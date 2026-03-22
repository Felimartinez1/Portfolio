import re
import os

css_path = os.path.join("css", "style.css")

with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

# Define the variables block to prepend
variables_block = """
:root {
  --bg-color: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-color: #212529;
  --text-secondary: #4a4a4a;
  --text-muted: #6c757d;
  --border-color: #e9ecef;
  --border-dark: #eee;
  --primary-color: #69b3a2;
  --nav-bg: #ffffff;
  --card-bg: #ffffff;
  --timeline-line: #dee2e6;
}

[data-theme="dark"] {
  --bg-color: #121212;
  --bg-secondary: #1e1e1e;
  --text-color: #e9ecef;
  --text-secondary: #adb5bd;
  --text-muted: #868e96;
  --border-color: #343a40;
  --border-dark: #495057;
  --primary-color: #69b3a2; /* Keep accent same or tweak slightly */
  --nav-bg: #1a1a1a;
  --card-bg: #1e1e1e;
  --timeline-line: #495057;
}

"""

# Replacements
replacements = [
    (r'color:\s*rgb\(0,\s*0,\s*0\);', 'color: var(--text-color);'),
    (r'color:\s*black;', 'color: var(--text-color);'),
    (r'color:\s*#000000;', 'color: var(--text-color);'),
    (r'background-color:\s*#fff;', 'background-color: var(--bg-color);'),
    (r'background-color:\s*#ffffff;', 'background-color: var(--bg-color);'),
    (r'background-color:\s*white;', 'background-color: var(--bg-color);'),
    (r'color:\s*#4a4a4a;', 'color: var(--text-secondary);'),
    (r'color:\s*#212529;', 'color: var(--text-color);'),
    (r'color:\s*#6c757d;', 'color: var(--text-muted);'),
    (r'background-color:\s*#f8f9fa;', 'background-color: var(--bg-secondary);'),
    (r'background:\s*#f8f9fa;', 'background: var(--bg-secondary);'),
    (r'border:\s*1px\s*solid\s*#e9ecef;', 'border: 1px solid var(--border-color);'),
    (r'border-color:\s*#e9ecef;', 'border-color: var(--border-color);'),
    (r'border-bottom:\s*1px\s*solid\s*#eee;', 'border-bottom: 1px solid var(--border-dark);'),
    (r'background-color:\s*#dee2e6;', 'background-color: var(--timeline-line);'),
]

for old, new in replacements:
    css = re.sub(old, new, css, flags=re.IGNORECASE)

# Prevent prepending multiple times if run twice
if ":root {" not in css:
    css = variables_block + css

with open(css_path, "w", encoding="utf-8") as f:
    f.write(css)

print("CSS refactoring complete.")
