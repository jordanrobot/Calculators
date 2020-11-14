echo off

SET /p user="Enter User Name:"
SET host=scenic-shop.com
SET publicDest=~/public_html/Calculators/

SET publicSource=./
if not exist %publicSource% goto :end

rsync -azvu --delete %publicSource% %user%@%host%:%publicDest% --chmod=Du=rwx,Dgo=rx,Fu=rw,Fgo=r --exclude ".git/" --exclude "deploy.bat"

:end
echo on