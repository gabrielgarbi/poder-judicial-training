import re

with open("src/data/topics.ts", "r", encoding="utf-8") as f:
    text = f.read()

# We need to parse the file or just do a regex
# The file has: export const studyTopics: StudyTopic[] = [ ... ]
# We can just split on `  {\n    id:`
header_split = text.split('  {\n    id:')
header = header_split[0]

# We want blocks 9 to 17 (0-indexed after the header, so indices 10 to 18 in header_split)
valid_blocks = header_split[10:]

# Re-assign IDs from 1 to 9
new_content = header
for i, block in enumerate(valid_blocks):
    # block starts with ` 10,\n    title:`
    # we replace the number before the first comma
    new_id = i + 1
    new_block = re.sub(r'^\s*\d+,', f' {new_id},', block)
    new_content += '  {\n    id:' + new_block

with open("src/data/topics.ts", "w", encoding="utf-8") as f:
    f.write(new_content)
print("Removed first 9 dummy topics successfully.")
