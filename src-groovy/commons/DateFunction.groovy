package commons

import java.time.DayOfWeek
import java.time.LocalDate
import java.time.Period
import java.time.temporal.ChronoUnit

class DateFunction {
	
	// Calculate Age
	public static Period calculateAge(LocalDate birthday){
		
		LocalDate today = LocalDate.now()
		Period period = Period.between( birthday, today )
		
		return period
	}
	
	// Calculate Work Days
	public static long calculateWorkDays(LocalDate start, LocalDate end) {
				
		final int startW = start.getDayOfWeek().getValue();
		final int endW = end.getDayOfWeek().getValue();
	
		final long days = ChronoUnit.DAYS.between(start, end);
		long result = days - 2*(days/7); //remove weekends
	
		if (days % 7 != 0) { //deal with the rest days
			if (startW == 7) {
				result -= 1;
			} else if (endW == 7) {  //they can't both be Sunday, otherwise rest would be zero
				result -= 1;
			} else if (endW < startW) { //another weekend is included
				result -= 2;
			}
		}
	
		return result;
	}
	
	// Next Working Day
	public static LocalDate nextWorkingDay(LocalDate start) {
		
		def i = 1
		
		for(i=1;i<=7;i++) {
			def refDate = start.plusDays(i)
			if(refDate.getDayOfWeek().getValue() < 6) {return refDate}
			
			i++
		}
	}
	
	// Previous Working Day
	public static LocalDate prevWorkingDay(LocalDate start) {
		
		def i = 1
		
		for(i=1;i<=7;i++) {
			def refDate = start.minusDays(i)
			if(refDate.getDayOfWeek().getValue() < 6) {return refDate}
			
			i++
		}
	}
}
