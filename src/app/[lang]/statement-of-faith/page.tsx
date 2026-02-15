import { randomUUID } from "node:crypto";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { isLocale, type Locale } from "@/i18n/config";

export default async function StatementOfFaithPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {

  const { lang } = await params; // ✅ unwrap params
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  
  return (
    <main className="flex-1">
      <section className="py-16 md:py-24 bg-linear-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-6">
              Statement of Faith/የእምነት አቋም
            </h1>

            <p className="text-lg text-center text-muted-foreground mb-12 leading-relaxed">
              These are the core beliefs that guide our church and define our
              understanding of the Christian faith.
            </p>

            {/* Amharic Statement of Faith */}
            <div>
              <h2 className="font-serif text-3xl font-semibold mb-4">
                
              </h2>

              <ol className="list-decimal pl-4 space-y-4 text-muted-foreground leading-relaxed">
                <li>
                  መጽሃፍ ቅዱስ 66ቱን የብሉይና የሐዲስ ኪዳን ቅዱሳት መጻሕፍት
                  ቅዱሳን ሰዎች በመንፈስ ቅዱስ እየተመሩ የጻፉትና ሙሉ ስልጣን ያለው
                  የህይወታችን መመርያ እንደሆነ እናምናለን፡፡
                </li>

                <li>
                  በአንድ አምላክ፣ በሶስት አካል እና በሶስት የመገለጥ ስርዓት
                  እናምናለን፡፡ በአብ፣ በወልድ እና በመንፈስ ቅዱስ በስላሴ እናምናለን፡፡
                </li>

                <li>
                  ጌታችን ኢየሱስ ክርስቶስ የሕያው እግዚአብሔር አንድያ ልጅ መሆኑን፣
                  ከድንግል ማርያም መወለዱን፣ ፍጹም ሰውና ፍጹም አምላክ መሆኑን
                  እናምናለን፡፡
                </li>

                <li>
                  ጌታችን ኢየሱስ ክርስቶስ ለሰው ልጆች ቤዛ ሆኖ በመስቀል ላይ
                  መሞቱን፣ መቀበሩን፣ በሶስተኛው ቀን በአካል ከሙታን መነሳቱን፣
                  ወደ አብ ቀኝ ማረጉን፣ አሁንም ለእኛ እንደሚማልድ እናምናለን፤
                  ደግሞም በሕያዋንና በሙታን ላይ ሊፈርድ እንደሚመለስ እናምናለን፡፡
                </li>

                <li>
                  ሰው በእግዚአብሔር አምሳል መፈጠሩን፣ ነገር ግን በሃጢአት በመውደቁ
                  ምክንያት የእግዚአብሔር ቁጣና ፍርድ ያለበት በደለኛ መሆኑን
                  እናምናለን፡፡
                </li>

                <li>
                  ሰው ከሃጢአት ሃይልና ቅጣት ሊድን የሚችለው ሃጢአት የሌለበት
                  የእግዚአብሔር ልጅ ኢየሱስ ክርስቶስ የሰው ምትክ ሆኖ በፈጸመው
                  የቤዛነት ስራ ብቻ መሆኑን፣ ሰውም በእግዚአብሔር ፀጋ በኢየሱስ
                  ክርስቶስ በማመን ብቻ እንደሚጸድቅ እናምናለን፡፡
                </li>

                <li>
                  በሃጢአት ምክንያት ወደ ሰው ህይወት በሽታ፣ ጭንቀት፣ ፍርሃት፣ ሞት፣
                  ፍሬያማ ያልሆነ ህይወት፣ ተስፋ መቁረጥ እና ሌሎች ከጨለማ አለም
                  የሆኑ ስርዓቶች እንደገቡ እናምናለን፤ እነዚህ ሁሉ በክርስቶስ
                  የመስቀል ስራ እንደተሻሩና በእምነት በነፃነት መኖር እንደሚቻል
                  እናምናለን፡፡
                </li>

                <li>
                  ሰው በጌታ በኢየሱስ ክርስቶስ አምኖ ዳግመኛ ሲወለድ አዲስ ፍጥረት
                  እንደሚሆንና መንፈስ ቅዱስ በሕይወቱ ውስጥ እንደሚሰራ እናምናለን፡፡
                </li>

                <li>
                  ሰው በጌታ በኢየሱስ ክርስቶስ አምኖ ንሰሐ በገባ ጊዜ በክርስቶስ ሞትና
                  ትንሳኤ መተባበሩን ለመግለጽ በአብ፣ በወልድ፣ በመንፈስ ቅዱስ ስም
                  በውሃ ውስጥ በመጥለቅ እንዲጠመቅ እንደሚገባና፣ ጌታ እስኪመጣ ድረስ
                  ሞቱን ለመናገር እና ከምዕመናን ጋር ያለውን ሕብረት ለመግለጽ
                  የጌታን እራት እንደሚካፈል እናምናለን፡፡
                </li>

                <li>
                  መንፈስ ቅዱስ በአማኝ ሕይወት ውስጥ እንደሚኖር እናምናለን፤
                  አማኙ በመንፈስ ቅዱስ ሲጠመቅ ሃይልን እንደሚቀበልና በልሳን
                  እንደሚናገር፣ በየጊዜውም በመንፈስ ቅዱስ እንደሚሞላ እናምናለን፡፡
                </li>

                <li>
                  በቤተክርስቲያን አንድነትና በክርስቶስ አካልነቷ እናምናለን፡፡
                </li>

                <li>
                  በክርስቶስ ዳግም ምጽዓትና በትንሳኤ እናምናለን፤ ይህ ዓለም እንደሚያልፍና
                  አዲስ ሰማይና ምድር ለአማኝ እንደተዘጋጀ እናምናለን፡፡
                </li>

                <li>
                  የመንፈስ ቅዱስ የፀጋ ስጦታዎች ሁሉ እስከ ክርስቶስ ምጽዓት ድረስ
                  እንደሚሰሩ እናምናለን፡፡
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


