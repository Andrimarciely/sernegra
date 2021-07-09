#!/usr/bin/env python3
"""
Converte um arquivo CSV qualquer em JSON.

Use:
    csv_to_json <arquivo de enttrada CSV> <arquivo de saída JSON>
"""
from csv import DictReader
from json import dump
from sys import argv

CMDLINE_ARGS = 3
COMMAND = 0
INPUT_FILE = 1
OUTPUT_FILE = 2

if __name__ == "__main__":

    if len(argv) == CMDLINE_ARGS:
        with open(argv[INPUT_FILE], "r") as f:
            data = [record for record in DictReader(f)]

        dump(data, open(argv[OUTPUT_FILE], "w"))

    else:
        print(f"Use: {argv[COMMAND]} <entrada CSV> <saída JSON>")
        exit(1)
