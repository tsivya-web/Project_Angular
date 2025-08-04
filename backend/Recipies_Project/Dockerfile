# שלב 1 - בניית הפרויקט
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# העתק כל קבצי ה־.csproj מתיקיות המשנה
COPY ./WebApi/WebApi.csproj ./WebApi/
COPY ./CORE/CORE.csproj ./CORE/
COPY ./DATA/DATA.csproj ./DATA/
COPY ./SERVICE/SERVICE.csproj ./SERVICE/

# שחזר את התלויות
RUN dotnet restore ./WebApi/WebApi.csproj

# העתק את כל שאר הקבצים
COPY . .

# בנה את הפרויקט
WORKDIR /src/WebApi
RUN dotnet publish -c Release -o /app/publish

# שלב 2 - הרצה
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "WebApi.dll"]
