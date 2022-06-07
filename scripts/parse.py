'''
[
    {
        block_name: "밥류",
        foods: [
            {
                name: "깍두기",
                love: 1,
                calorie: 270,
                carbo: 61.1,
                protein: 5.4,
                fat: 0.7
            },
            ...
        ]
    },
    ...
]
'''

import json

def parse_line(line):
    try:
        line_info, line_nutrients = line.split(" / ")   
    except:
        raise ValueError(f"문제의 라인: {line}\n\n'/' 앞뒤로 띄어쓰기가 있습니까? '/'가 하나만 있습니까?")

    try:
        name, love, calorie = line_info.split()
    except:
        raise ValueError(f"문제의 라인: {line}\n\n'/' 앞을 확인하세요.")

    try:
        carbo, protein, fat = line_nutrients.split(", ")
    except:
        raise ValueError(f"문제의 라인: {line}\n\n', '로 탄수화물, 단백질, 지방이 구분되어 있습니까? 쉼표 뒤에 띄어쓰기가 있습니까?")


    try:
        food = {"name": name, "love": int(love), "calorie": int(calorie), "carbo": float(carbo), "protein": float(protein), "fat": float(fat)}
    except:
        raise ValueError(f"문제의 라인: {line}\n\n값 형식에 문제가 있습니다. 소수점이 명확한지 등 형식을 확인하세요.")
    return food

def parse_block(lines):
    block_name = lines[0][1:]
    block_name = block_name.rstrip()
    foods = []
    for line in lines[1:]:
        food = parse_line(line)
        foods.append(food)

    block = {"block_name": block_name, "foods": foods}
    return block

def parse_file(file):
    block_lines = []
    i = -1
    while True:
        line = file.readline()
        if not line:
            break
        elif line.startswith("#"): # comment
            continue
        elif not line.strip():
            continue
        elif line.startswith("@"): # block start
            lines = [line]
            block_lines.append(lines)
            i += 1
            continue

        block_lines[i].append(line)
    
    blocks = []
    for block_line in block_lines:
        block = parse_block(block_line)
        blocks.append(block)

    return blocks


with open("origin") as file:
    blocks = parse_file(file)

encoded = json.dumps(blocks, indent="\t", ensure_ascii=False)

with open("values.json", "w") as file:
    file.write(encoded)

print("파일을 생성하였습니다.")
