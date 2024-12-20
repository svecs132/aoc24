set windows-shell := ["powershell.exe", "-NoLogo", "-Command"]

alias r := run

@_default:
    just --list

@run day part:
    bun run d{{ day }}/p{{ part }}.ts -- d{{ day }}/input.txt

@new day:
    mkdir d{{ day }} | Out-Null
    new-item d{{ day }}/input.txt | Out-Null
    cp _template/_t.ts d{{ day }}/p1.ts | Out-Null
    cp _template/_t.ts d{{ day }}/p2.ts | Out-Null
    echo "$([char]0x1b)[1mReady for day $([char]0x1b)[32m{{ day }}$([char]0x1b)[0;1m!$([char]0x1b)[0m Good luck :)"
