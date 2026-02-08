import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="py-16 md:py-24 bg-linear-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-6">
              About Us
            </h1>
            <p className="text-lg text-center text-muted-foreground mb-12 leading-relaxed">
              Learn about our church&apos;s history, mission, and vision for the
              future.
            </p>

            <div className="space-y-12">
              <div>
                <h2 className="font-serif text-3xl font-semibold mb-4">
                  Our Story
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">

የትንሳኤው ሃይል ቤተክርስትያን-ፈረንሳይ
ቤተክርስትያናችን በሜይ 30/2019 በፈረንሳይ ፓሪስ ከተማ ተመስርታ የመጀመርያው መንፈሳዊ ፕሮግራም እሁድ ጁን 2/2019 ተካሂዶአል። ቤተክርስትያኒቱ ፔንቴኮስታል (Pentecostal) ቤተክርስትያን ስትሆን ከተለያዩ ሌሎች ቤተክርስትያናት ጋር በወንጌል አብሮ በመስራት የምታምን ናት። 

መልእክተኝነታችን (አላማችን)
አንድና ብቸኛ በሆነው በኤፌሶን 1፥9-10 በተጠቀሰው አለምን በክርስቶስ መጠቅለል በሚለው የእ/ር ራእይ ውስጥ የክርስቶስ ህይወትና የትንሳኤውን ሃይል መግለጥ ነው።




                </p>
                
              </div>

              <div>
  <h2 className="font-serif text-3xl font-semibold mb-4">
    ተልእኮ (Mission)
  </h2>

  <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-relaxed">
    <li>
      አማኞች በእ/ር ቃል የታነጹ እንዲሆኑ መሰረታቸውን የሚያጸኑ ትምህርቶችና ስብከቶችን መስጠት፣
    </li>
    <li>
      ክርስቶስን መምሰል ማእከል ያደረጉ ትምህርቶችንና ስብከቶችን መስጠት፣
    </li>
    <li>
      አማኞች የእ/ርን ፈቃድ አውቀው የህይወታቸው መርህ እንዲያደርጉት ማነጽ፣
    </li>
    <li>
      አማኞች በሚኖሩበት ማህበረሰብ ውስጥ የክርስቶስ ደቀመዝሙር ሆነው ተጽእኖ ፈጣሪ እንዲሆኑ ማነጽ፣
    </li>
    <li>
      አማኞች የክርስትና እሴቶችን — እምነትን፣ ፍቅርን፣ ጸድቅን፣ ቅድስናን፣ እ/ር መፍራትን — እርስ በእርሳቸው እንዲያሳዩ ማነጽ፣
    </li>
    <li>
      የክርስትና የክብር ህይወት በአማኝ ህይወት ውስጥ በመንፈስ ቅዱስ እንዲገለጥ ማነጽ፣
    </li>
    <li>
      በመንፈስ ቅዱስ የጸጋ መገለጥ በፈውስ፣ ሃይልን በማካፈል፣ በነጻ ማውጣት ማገልገል፣
    </li>
    <li>
      ለማያምኑ የክርስቶስን ወንጌል መመስከር፣
    </li>
  </ol>
</div>


           
                    
             
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
