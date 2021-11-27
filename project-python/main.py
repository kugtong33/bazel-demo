import sys
import platform

def main():
    return platform.uname()

sys.modules[__name__] = main
