# PDF_editor_demo
2022 Summer MadCamp Week3 

## Project name
PDF editor

## Teammates
POSTECH 컴퓨터공학과 박정은

KAIST 전산학부 문동우

## Environment
OS : Window
Frontend : Java Script
Backend : Python, HTML, css
IDE : Visual studio Code
Framework : Flask
Backend: flask + json
Database: SQLite

## Description
이 웹은 PDF에 padding을 추가할 수 있고, 여러 PDF를 upload시 병합할 수 있고, ,JPG, PNG 등과같이 PDF가 아닌 파일을 PDF로 전환해준다.

## Implementation Method
1. 탭 전환 – navigator의 push, pop을 이용한 route간의 화면전환

2. data 전달 및 저장
* data 저장 : database_forPadding.csv
** 사용자의 id와, 사용자가 입력한 option들은 csv 파일에 [ index,filename,user_id,left,top,right,bottom ] data로 저장해준다.
* data 전달 : database_forPadding.py
** csv에 저장된 정보들은, database_forPadding.py를 통해 각 함수가 필요로 하는 특정 data들로 parsing되어 app.py로 전달된다.

## Usage
### tab1 – file upload
| | | | |
|---|---|
| | |
첫 화면에선 File을 upload한다. 한번에 여러 파일을 Multi upload 할 수도 있다. 
Left, top, right, bottom 측에 얼마나 padding을 둘지에 대한 option또한 입력받는다.

### tab2.1 – 

| | | | |
|---|---|
| | |

### tab2.2 –

| | | |
|---|---|---|
|	|	|	|


### tab2.3 –

| |
|---|
|	|

