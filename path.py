from pathlib import Path

IGNORE = {
    "__pycache__",
    ".venv",
    "venv",
    ".git",
    ".idea",
    ".vscode"
    ".github"
}

def tree(directory, prefix=""):
    directory = Path(directory)

    items = [
        p for p in sorted(
            directory.iterdir(),
            key=lambda x: (x.is_file(), x.name.lower())
        )
        if p.name not in IGNORE
    ]

    for i, path in enumerate(items):
        connector = "└── " if i == len(items) - 1 else "├── "
        print(prefix + connector + path.name)

        if path.is_dir():
            extension = "    " if i == len(items) - 1 else "│   "
            tree(path, prefix + extension)

root = Path("")

print(root.name)
tree(root)