using System;

public class Student {
    public string FullName { get; }
    public int YearOfBirth { get; }
    public int YearOfAdmission { get; }
    public string Gender { get; }
    public string Nationality { get; }

    public Student(string fullName, int yearOfBirth, int yearOfAdmission, string gender, string nationality) {
        if (yearOfAdmission < 1996 || yearOfAdmission > 2011) {
            throw new ArgumentException("Year of admission should be in the range from 1996 to 2011");
        }

        if (yearOfBirth < 1990 || yearOfBirth > 1995) {
            throw new ArgumentException("Year of birth should be in the range from 1990 to 1995");
        }

        FullName = fullName;
        YearOfBirth = yearOfBirth;
        YearOfAdmission = yearOfAdmission;
        Gender = gender;
        Nationality = nationality;
    }
}

public class Program {
    public static void Main() {
        Student[] students = {
            new Student("Alice Smith", 1993, 2009, "Female", "American"),
            new Student("Bob Johnson", 1992, 2010, "Male", "Canadian"),
            new Student("Charlie Lee", 1991, 2011, "Male", "Chinese"),
            new Student("David Kim", 1990, 2008, "Male", "Korean"),
        };

        foreach (Student student in students) {
            Console.WriteLine(student.FullName);
        }
    }
}
