for (var daysUntilMyBirthday = 60; daysUntilMyBirthday > -1; --daysUntilMyBirthday) {
    if (daysUntilMyBirthday > 30) {
        console.log("My birthday is " + daysUntilMyBirthday + " days away. That is so long!");
    } else if (daysUntilMyBirthday <= 30 && daysUntilMyBirthday > 5) {
        console.log("My birthday is " + daysUntilMyBirthday + " days away. I'm so excited!");
    } else if (daysUntilMyBirthday <= 5 && daysUntilMyBirthday !== 0) {
        console.log("My birthday is " + daysUntilMyBirthday + " days away. I'M SO EXCITED!");
    } else {
        console.log("It's my birthday! LET'S PARTY!!!!");
        console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
        console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
        console.log("*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
    }
}