import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params; // ✅ unwrap params
  if (!isLocale(lang)) notFound();

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
                  የትንሳኤው ሃይል ቤተክርስትያን-ፈረንሳይ ቤተክርስትያናችን በሜይ 30/2019 በፈረንሳይ ፓሪስ
                  ከተማ ተመስርታ የመጀመርያው መንፈሳዊ ፕሮግራም እሁድ ጁን 2/2019 ተካሂዶአል። ቤተክርስትያኒቱ
                  ፔንቴኮስታል (Pentecostal) ቤተክርስትያን ስትሆን ከተለያዩ ሌሎች ቤተክርስትያናት ጋር
                  በወንጌል አብሮ በመስራት የምታምን ናት። መልእክተኝነታችን (አላማችን) አንድና ብቸኛ በሆነው
                  በኤፌሶን 1፥9-10 በተጠቀሰው አለምን በክርስቶስ መጠቅለል በሚለው የእ/ር ራእይ ውስጥ የክርስቶስ
                  ህይወትና የትንሳኤውን ሃይል መግለጥ ነው።
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
                  <li>ክርስቶስን መምሰል ማእከል ያደረጉ ትምህርቶችንና ስብከቶችን መስጠት፣</li>
                  <li>አማኞች የእ/ርን ፈቃድ አውቀው የህይወታቸው መርህ እንዲያደርጉት ማነጽ፣</li>
                  <li>
                    አማኞች በሚኖሩበት ማህበረሰብ ውስጥ የክርስቶስ ደቀመዝሙር ሆነው ተጽእኖ ፈጣሪ እንዲሆኑ ማነጽ፣
                  </li>
                  <li>
                    አማኞች የክርስትና እሴቶችን — እምነትን፣ ፍቅርን፣ ጸድቅን፣ ቅድስናን፣ እ/ር መፍራትን —
                    እርስ በእርሳቸው እንዲያሳዩ ማነጽ፣
                  </li>
                  <li>የክርስትና የክብር ህይወት በአማኝ ህይወት ውስጥ በመንፈስ ቅዱስ እንዲገለጥ ማነጽ፣</li>
                  <li>በመንፈስ ቅዱስ የጸጋ መገለጥ በፈውስ፣ ሃይልን በማካፈል፣ በነጻ ማውጣት ማገልገል፣</li>
                  <li>ለማያምኑ የክርስቶስን ወንጌል መመስከር፣</li>
                </ol>
              </div>

              <div>
                <h2 className="font-serif text-3xl font-semibold mb-4">
                  Statement of Faith/የእምነት አቋም
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  These are the core beliefs that guide our church and define
                  our understanding of the Christian faith.
                </p>

                <ol className="list-decimal pl-4 space-y-4 text-muted-foreground leading-relaxed">
                  <li>
                    መጽሃፍ ቅዱስ 66ቱን የብሉይና የሐዲስ ኪዳን ቅዱሳት መጻሕፍት ቅዱሳን ሰዎች በመንፈስ ቅዱስ
                    እየተመሩ የጻፉትና ሙሉ ስልጣን ያለው የህይወታችን መመርያ እንደሆነ እናምናለን፡፡
                  </li>

                  <li>
                    በአንድ አምላክ፣ በሶስት አካል እና በሶስት የመገለጥ ስርዓት እናምናለን፡፡ በአብ፣ በወልድ እና
                    በመንፈስ ቅዱስ በስላሴ እናምናለን፡፡
                  </li>

                  <li>
                    ጌታችን ኢየሱስ ክርስቶስ የሕያው እግዚአብሔር አንድያ ልጅ መሆኑን፣ ከድንግል ማርያም መወለዱን፣
                    ፍጹም ሰውና ፍጹም አምላክ መሆኑን እናምናለን፡፡
                  </li>

                  <li>
                    ጌታችን ኢየሱስ ክርስቶስ ለሰው ልጆች ቤዛ ሆኖ በመስቀል ላይ መሞቱን፣ መቀበሩን፣ በሶስተኛው
                    ቀን በአካል ከሙታን መነሳቱን፣ ወደ አብ ቀኝ ማረጉን፣ አሁንም ለእኛ እንደሚማልድ እናምናለን፤
                    ደግሞም በሕያዋንና በሙታን ላይ ሊፈርድ እንደሚመለስ እናምናለን፡፡
                  </li>

                  <li>
                    ሰው በእግዚአብሔር አምሳል መፈጠሩን፣ ነገር ግን በሃጢአት በመውደቁ ምክንያት የእግዚአብሔር
                    ቁጣና ፍርድ ያለበት በደለኛ መሆኑን እናምናለን፡፡
                  </li>

                  <li>
                    ሰው ከሃጢአት ሃይልና ቅጣት ሊድን የሚችለው ሃጢአት የሌለበት የእግዚአብሔር ልጅ ኢየሱስ
                    ክርስቶስ የሰው ምትክ ሆኖ በፈጸመው የቤዛነት ስራ ብቻ መሆኑን፣ ሰውም በእግዚአብሔር ፀጋ
                    በኢየሱስ ክርስቶስ በማመን ብቻ እንደሚጸድቅ እናምናለን፡፡
                  </li>

                  <li>
                    በሃጢአት ምክንያት ወደ ሰው ህይወት በሽታ፣ ጭንቀት፣ ፍርሃት፣ ሞት፣ ፍሬያማ ያልሆነ ህይወት፣
                    ተስፋ መቁረጥ እና ሌሎች ከጨለማ አለም የሆኑ ስርዓቶች እንደገቡ እናምናለን፤ እነዚህ ሁሉ
                    በክርስቶስ የመስቀል ስራ እንደተሻሩና በእምነት በነፃነት መኖር እንደሚቻል እናምናለን፡፡
                  </li>

                  <li>
                    ሰው በጌታ በኢየሱስ ክርስቶስ አምኖ ዳግመኛ ሲወለድ አዲስ ፍጥረት እንደሚሆንና መንፈስ ቅዱስ
                    በሕይወቱ ውስጥ እንደሚሰራ እናምናለን፡፡
                  </li>

                  <li>
                    ሰው በጌታ በኢየሱስ ክርስቶስ አምኖ ንሰሐ በገባ ጊዜ በክርስቶስ ሞትና ትንሳኤ መተባበሩን
                    ለመግለጽ በአብ፣ በወልድ፣ በመንፈስ ቅዱስ ስም በውሃ ውስጥ በመጥለቅ እንዲጠመቅ እንደሚገባና፣
                    ጌታ እስኪመጣ ድረስ ሞቱን ለመናገር እና ከምዕመናን ጋር ያለውን ሕብረት ለመግለጽ የጌታን እራት
                    እንደሚካፈል እናምናለን፡፡
                  </li>

                  <li>
                    መንፈስ ቅዱስ በአማኝ ሕይወት ውስጥ እንደሚኖር እናምናለን፤ አማኙ በመንፈስ ቅዱስ ሲጠመቅ
                    ሃይልን እንደሚቀበልና በልሳን እንደሚናገር፣ በየጊዜውም በመንፈስ ቅዱስ እንደሚሞላ እናምናለን፡፡
                  </li>

                  <li>በቤተክርስቲያን አንድነትና በክርስቶስ አካልነቷ እናምናለን፡፡</li>

                  <li>
                    በክርስቶስ ዳግም ምጽዓትና በትንሳኤ እናምናለን፤ ይህ ዓለም እንደሚያልፍና አዲስ ሰማይና ምድር
                    ለአማኝ እንደተዘጋጀ እናምናለን፡፡
                  </li>

                  <li>
                    የመንፈስ ቅዱስ የፀጋ ስጦታዎች ሁሉ እስከ ክርስቶስ ምጽዓት ድረስ እንደሚሰሩ እናምናለን፡፡
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
