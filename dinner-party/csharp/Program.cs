using System;
using System.Collections.Generic;

static void Tester()
 {
     Console.WriteLine("chicken");
 }

 public class Guest 
{
        public Guest(string name, string occupation, string bio) 
        {
            this.Name = name;
                this.Occupation = occupation;
                this.Bio = bio;
               
        }
        public Guest(string name, string occupation, string bio) 
        {
            this.Name = name;
                this.Occupation = occupation;
                this.Bio = bio;
               
        }
                    public string Name {get; set;}
    public string Occupation {get; set;}
    public string Bio {get; set;}

    public Guest(string name, string occupation, string bio)
    {
        this.Name = name;
        this.Occupation = occupation;
        this.Bio = bio;
    }


Guest MarilynMonroe = new Guest (
    "Marilyn Monroe",
    "entertainer",
    "(1926 - 1962) American actress, singer, model"
);
Guest AbrahamLincoln = new Guest (
    "Abraham Lincoln",
     "politician",
     "(1809 - 1865) US President during American civil war"
);
Guest MartinLutherKing = new Guest (
    "Martian Luther King",
    "activist",
    "(1913 - 2005)  American civil rights activist"
);
Guest PeteSellers = new Guest (
    "Pete Sellers",
    "entertainer",
    "(1925 - 1980) British actor and comedian"
);
Guest AlanTuring = new Guest (
    "Alan Turing",
   "computer scientist",
     "(1912 - 1954) - British computing pioneer, Turing machine, algorithms, cryptology, computer architecture, saved the world"
);
Guest AdmiralGraceHopper = new Guest (
    "Admiral Grace Hopper",
    "computer scientist",
    "(1906–1992) - developed early compilers: FLOW-Matic, COBOL; worked on UNIVAC; gave speeches on computer history, where she gave out nano-seconds"
);
Guest IndiraGandhi = new Guest (
    "Indira Gandhi",
    "politician",
    "(1917 - 1984) Prime Minister of India 1966 - 1977"
);
}

 Tester();