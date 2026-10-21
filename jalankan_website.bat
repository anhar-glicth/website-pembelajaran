@echo off
title Server Pembelajaran C++ - Muhammad Anhar Solihin
echo ======================================================================
echo    WEBSITE PEMBELAJARAN C++ - BUATAN MUHAMMAD ANHAR SOLIHIN
echo ======================================================================
echo.
echo Menjalankan local server di: http://localhost:8080
echo (Menghindari batasan file:/// agar video YouTube dapat diputar langsung)
echo.
echo Tekan Ctrl+C untuk menghentikan server jika selesai belajar.
echo ======================================================================
echo.
start http://localhost:8080
php -S localhost:8080
pause
