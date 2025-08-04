using CORE.repositories;
using CORE.service;
using Microsoft.EntityFrameworkCore;
using WebApi.Entities;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
    });
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IUserRepository,UserRepository>();
builder.Services.AddScoped<IUserService, UserService>();


builder.Services.AddScoped<IRecipiesRepository, RecipiesRepository>();
builder.Services.AddScoped<IRecipeService, RecipeService>();

builder.Services.AddScoped<IIngredientRepository, IngredientRepository>();
builder.Services.AddScoped<IIngredientService, IngredientService>();

builder.Services.AddScoped<IIngredient_RecipeRepository, Ingredient_RecipeRepository>();
builder.Services.AddScoped<IIngredient_RecipeService, Ingredient_RecipeService>();

var host = Environment.GetEnvironmentVariable("DB_HOST");
var port = Environment.GetEnvironmentVariable("DB_PORT");
var database = Environment.GetEnvironmentVariable("DB_DATABASE");
var username = Environment.GetEnvironmentVariable("DB_USERNAME");
var password = Environment.GetEnvironmentVariable("DB_PASSWORD");

//var host = "db.yoywzqgbwlnozptgbzvg.supabase.co";
//var port = "5432";
//var database = "postgres";
//var username = "postgres";
//var password = "U1w2xIX5axAEdJ5P";
var connectionString = $"Host={host};Port={port};Database={database};Username={username};Password={password};Ssl Mode=Require;Trust Server Certificate=true;Pooling=true;";
Console.WriteLine("Building connection string: " + connectionString);
builder.Services.AddDbContext<DataContext>(options =>
    options.UseNpgsql(connectionString));
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});


//builder.WebHost.UseUrls("http://+:8080");

var app = builder.Build();
app.UseCors("AllowAll");
// Configure the HTTP request pipeline.

    app.UseSwagger();
    app.UseSwaggerUI();

app.UseStaticFiles();




app.UseAuthorization();

app.MapControllers();
app.UseDeveloperExceptionPage();


app.Run();
