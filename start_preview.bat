@echo off
chcp 65001 >nul
title PULSE Preview Server
echo Запуск локального сервера PULSE...
node server.js
pause

