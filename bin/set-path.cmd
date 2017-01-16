@echo off

SET COURSE_HOME=%CD%

FOR /D %%I IN ("%CD%") DO SET _LAST_SEGMENT_=%%~nxI

echo Initial COURSE_HOME: %COURSE_HOME%
echo LAST_SEGMENT: %_LAST_SEGMENT_%

if "%_LAST_SEGMENT_%"=="bin" (
  set COURSE_HOME=%COURSE_HOME:~0,-4%
)

echo Modified COURSE_HOME %COURSE_HOME%
set OLD_PATH=%PATH%
set NODE_MODULES=%COURSE_HOME%\node_modules\.bin

echo Setting PATH....
set PATH=%NODE_MODULES%;%COURSE_HOME%\bin;%PATH%

echo PATH successfully set for SPANS
echo PATH is %PATH%
