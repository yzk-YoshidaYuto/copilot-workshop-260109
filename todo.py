import json
import argparse
from pathlib import Path

# JSONファイルのパス
data_file = Path("todo.json")

# データをロードする関数
def load_data():
    if data_file.exists():
        with open(data_file, "r", encoding="utf-8") as file:
            return json.load(file)
    return []

# データを保存する関数
def save_data(data):
    with open(data_file, "w", encoding="utf-8") as file:
        json.dump(data, file, indent=4, ensure_ascii=False)

# タスクを追加する関数
def add_task(task):
    data = load_data()
    data.append({"task": task, "done": False})
    save_data(data)
    print(f"タスクを追加しました: {task}")

# タスク一覧を表示する関数
def list_tasks():
    data = load_data()
    if not data:
        print("タスクはありません。")
        return

    for idx, item in enumerate(data, start=1):
        status = "[完了]" if item["done"] else "[未完了]"
        print(f"{idx}: {status} {item['task']}")

# タスクを完了済みにする関数
def mark_done(task_id):
    data = load_data()
    if 0 < task_id <= len(data):
        data[task_id - 1]["done"] = True
        save_data(data)
        print(f"タスク {task_id} を完了済みにしました。")
    else:
        print("無効なタスクIDです。")

# タスクを削除する関数
def delete_task(task_id):
    data = load_data()
    if 0 < task_id <= len(data):
        removed_task = data.pop(task_id - 1)
        save_data(data)
        print(f"タスクを削除しました: {removed_task['task']}")
    else:
        print("無効なタスクIDです。")

# メイン関数
def main():
    parser = argparse.ArgumentParser(description="Todo管理CLIツール")
    parser.add_argument("command", choices=["add", "list", "done", "delete"], help="実行するコマンド")
    parser.add_argument("arg", nargs="?", help="コマンドに必要な引数")

    args = parser.parse_args()

    if args.command == "add":
        if args.arg:
            add_task(args.arg)
        else:
            print("タスクの内容を指定してください。")
    elif args.command == "list":
        list_tasks()
    elif args.command == "done":
        if args.arg and args.arg.isdigit():
            mark_done(int(args.arg))
        else:
            print("有効なタスクIDを指定してください。")
    elif args.command == "delete":
        if args.arg and args.arg.isdigit():
            delete_task(int(args.arg))
        else:
            print("有効なタスクIDを指定してください。")

if __name__ == "__main__":
    main()