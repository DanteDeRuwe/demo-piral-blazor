namespace Blazor.LibB
{
    public static class Greeter
    {
        public static string SayHello()
        {
            return "Hello from Lib B";
        }
        
        public static string LetCSayHello()
        {
            return LibC.Greeter.SayHello();
        }
    }
}
