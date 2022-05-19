
main() {

	var a, b, ans;
	printf("Enter the base and the power : ");
	scanf("%d%d", a, b);
	ans = power(a, b);
	printf("%d raised to the power %d = %d\n", a, b, ans);
	_getch();
    return 0;
}

var power = x,  y;
{
	var num = 1, i;
	for (i = 1; i <= y; i++)
		num = num*x;
	return(num);
}
q2:
function leapyear(year)
{
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));
Explanation:

//A leap year is a year containing one additional day added to keep the calendar year synchronized with the astronomical or seasonal year. Because seasons and astronomical events do not repeat in a whole number of days, calendars that have the same number of days in each year drift over time with respect to the event that the year is supposed to track. By inserting an additional day or month into the year, the drift can be corrected. A year that is not a leap year is called a common year.
//Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial years are leap years if they are exactly divisible by 400. For example, the years 1700, 1800, and 1900 are not leap years, but the year 2000 is To determine whether a year is a leap year, follow these steps :

//Step-1 : If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
//Step-2 : If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
//Step-3 : If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
//Step-4 : The year is a leap year (it has 366 days).
//Step-5 : The year is not a leap year (it has 365 days).
q3:
#include<math.h>
var area (a, b, c);
void main()
{
    var a, b, c;

    printf("Enter a: ");
    scanf("%d", a);
    printf("Enter b: ");
    scanf("%d", b);
    printf("Enter c: ");
    scanf("%d", c);

    area(a,b,c);
}
var area (a,  b,  c)
{
    float S,ar;

    S = (a+b+c)/2.0;

    ar = sqrt(S*(S-a)*(S-b)*(S-c));

    printf("Area of Triangle: %f",ar);
}
q4:
let substr = 'know';

let count = 0;

let index = str.indexOf(substr);
while(index !== -1) {
    count++;
    index = str.indexOf(substr, index + 1);
}

console.log(count);


q6:
import java.util.Arrays;
import java.util.List;
 
class Test
{   
    static String remVowel(String str)
    {
         Character vowels[] = {'a', 'e', 'i', 'o', 'u','A','E','I','O','U'};
          
         List<Character> al = Arrays.asList(vowels);
          
         StringBuffer sb = new StringBuffer(str);
          
         for (int i = 0; i < sb.length(); i++) {
            if(al.contains(sb.charAt(i))){
                sb.replace(i, i+1, "") ;
                i--;
             }
        }
          
         
        return sb.toString();
    }
    // Driver method to test the above function
    public static void main(String[] args)
    {
        String str = "GeeeksforGeeks - A Computer Science Portal for Geeks";
         
        System.out.println(remVowel(str));
    }
q8:
int main()
{
    float km, m, cm, f, inch;
    printf("Enter distance in kilometers: ");
    scanf("%f", km);
    /* calculate the conversion */
    m = km * 1000;
    cm = km * 1000 * 100;
    f = km * 3280.84;
    inch = km * 39370.08;
    printf("The distance in Feet: %f\n", f);
    printf("The distance in Inches: %f\n", inch);
    printf("The distance in Meters: %f\n", m);
    printf("The distance in Centimeters: %f\n", cm);
    return (0);
}

q9:
 main()
{
    var count = 1, working_hours, over_time;
    over_time_pay;

    while(count<=10)
    {
        printf("Enter the working hours of employee no %d: ", count);
        scanf("%d", working_hours);
        if(working_hours>40)
        {
            over_time = working_hours - 40;
            over_time_pay = over_time * 12.00;
            printf("Employee No %d overtime pay is %.2f\n", count, over_time_pay);
        }
        else
            printf("You have to work for more than 40 hours to get over time pay\n");

        count++;
    }
}
q10:
#include <stdio.h>
#include<conio.h>
main ()
{
    var amount;
    // taking input   
    printf("Enter the amount to be withdrawn (in hundreds): ");
    scanf("%d",amount);
   
    //calculations
    printf("\n\nRequired notes of Rs. 100  :  %d", amount / 100);
    // e.g. if amount entered is 987 then 987 / 100 will answer 9 (because amount is an intiger variable) 
   
    printf("\n\nRequired notes of Rs. 50   :  %d", (amount % 100) / 50);
    //e.g. 987 % 100 will answer 87 and then 87 / 50 will answer 1.
   
    printf("\n\nRequired notes of Rs. 10   :  %d", (((amount % 100) % 50) / 10));
   
    printf("\n\nAmount still remaining Rs. :  %d", (((amount % 100) % 50) % 10));
   
    getch();
}
//chap43-48//
q1:
(document).ready(function() {
    $('.activater').click(function() {
      $('.alert').show()
    })
  });
  q4:
  let img = document.querySelector('img');
  let start = img.src;
  let hover = img.getAttribute('data-hover'); //specified in img tag

  img.onmouseover = () => { img.src = hover; }
  img.onmouseout = () => { img.src = start; } //to revert back to start
  q5:
  var counter = 0;
        function increment(){
            counter++;
            console.log(counter);
        }
        <input type="button" onClick="increment()" value="Increment"/>
        function incrementValue()
    {
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('number').value = value;
    }
    //chapter 49-52//
    <form action="action_page.php" style="border:1px solid #ccc">
  <div class="container"></div>
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr></hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>email</input>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>password</input>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>Repeat password</input>

    <label>
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me</input>
    </label>

    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms and Privacy</a>.</p>

    <div class="clearfix">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>
</form>

