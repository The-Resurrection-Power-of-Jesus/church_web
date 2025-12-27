"use client";
import Link from "next/link";
import { Calendar, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function BlogsPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const blogs = [
    {
      title: "ገላትያ 2",
      excerpt:
        "ጳውሎስ በሐዋርያት ዘንድ ተቀባይነት ስለ ማግኘቱ ከዐሥራ አራት ዓመት በኋላም፣ ዳግመኛ ወደ ኢየሩሳሌም ወጣሁ፤ በዚህ ጊዜ ከበርናባስ ጋራ ነበርሁ፤ ቲቶንም  ይዤው ሄጄ ነበር። ካገኘሁትም መገለጥ የተነሣ ወደዚያ ሄድሁ፤ በአሕዛብ መካከል የምሰብከውን ወንጌል ለእነርሱም ገለጥሁላቸው። ይሁን እንጂ፣ ምናልባት በከንቱ እየሮጥሁ ወይም ሮጬ እንዳይሆን በመሥጋት፣ ዋነኞች ለሚመስሉት ብቻ በግል ይህን አስታወቅኋቸው። ከእኔ ጋራ የነበረው ቲቶ እንኳ የግሪክ ሰው ቢሆንም፣ እንዲገረዝ አልተገደደም ነበር። ይህ ጕዳይ የተነሣው አንዳንድ ሐሰተኞች ወንድሞች በክርስቶስ ኢየሱስ ያገኘነውን ነጻነት ሊሰልሉና ባሪያዎች ሊያደርጉን ወደ እኛ ሾልከው በመግባታቸው ነው። ለእነዚህ ሰዎች ለአንድ አፍታ እንኳ አልተገዛንላቸውም፤ ይኸውም፣ የወንጌል እውነት ከእናንተ ጋራ ጸንቶ እንዲኖር ነው። ዋነኛ መስለው ስለሚታዩት ሰዎች ማንነት እኔን አይገደኝም፤ እግዚአብሔር የሰውን ፊት አይቶ አያደላም፤ እነዚህም ሰዎች ለመልእክቴ የጨመሩልኝ ነገር የለም።   ነገር ግን ጴጥሮስ ለተገረዙት ወንጌልን እንዲሰብክ ዐደራ እንደ ተሰጠው፣ እኔም ላልተገረዙት ወንጌልን እንድሰብክ ዐደራ እንደ ተሰጠኝ ተገነዘቡ፤   ጴጥሮስን ለአይሁድ ሐዋርያ እንዲሆን የሠራ እግዚአብሔር፣ በእኔ የአሕዛብ ሐዋርያዊ አገልግሎትም ሠርቷል።  እንደ አዕማድ የሚቈጠሩት ያዕቆብ፣ ኬፋና ዮሐንስም የተሰጠኝን ጸጋ ባስተዋሉ ጊዜ፣ ለእኔና ለበርናባስ የትብብር ቀኝ እጃቸውን ሰጡን፤ ከዚያም እኛ ወደ አሕዛብ፣ እነርሱ ደግሞ ወደ አይሁድ እንድንሄድ ተስማሙ።",
      author: "Ablavie KOMBATE",
      date: "December 10, 2025",
      category: "Teaching",
    },
    {
      title: "ሉቃስ 5፥18-26",
      excerpt:
        "18 እነሆም፥ አንድ ሽባ በአልጋ ተሸክመው አመጡ፤ አግብተውም በፊቱ ሊያኖሩት ይሹ ነበር።ስለ ሕዝቡም ብዛት እንዴት አድርገው እንዲያገቡት ሲያቅታቸው፥ ወደ ሰገነቱ ወጡ የጣራውንም ጡብ አሳልፈው በመካከል በኢየሱስ ፊት ከነአልጋው አወረዱት።እምነታቸውንም አይቶ፡— አንተ ሰው፥ ኃጢአትህ ተሰረየችልህ፡ አለው።ጻፎችና ፈሪሳውያንም፡— ይህ የሚሳደብ ማን ነው? ከአንዱ ከእግዚአብሔር በቀር ኃጢአት ሊያስተሰርይ ማን ይችላል? ብለው ያስቡ ጀመር። ኢየሱስም አሳባቸውን እያወቀ መልሶ፡— በልባችሁ ምን ታስባላችሁ? ኃጢአትህ ተሰረየችልህ ከማለት ወይስ፡— ተነሣና ሂድ ከማለት ማናቸው ይቀላል? ነገር ግን በምድር ላይ ኃጢአት ሊያስተሰርይ ለሰው ልጅ ሥልጣን እንዳለው እንድታውቁ ብሎ፥ ሽባውን፡— አንተን እልሃለሁ፥ ነተሣ፥ አልጋህን ተሸክመህ ወደ ቤትህ ሂድ፡ አለው። በዚያን ጊዜም በፊታቸው ተነሣ፥ ተኝቶበትም የነበረውን ተሸክሞ እግዚአብሔርን እያመሰገነ ወደ ቤቱ ሄደ። ሁሉንም መገረም ያዛቸው፥ እግዚአብሔርንም አመስግነው። ዛሬስ ድንቅ ነገር አየን እያሉ ፍርሃት ሞላባቸው።",
      author: "Pastor Teddy Chernet",
      date: "December 19, 2025",
      category: "Teaching",
    },
    {
      title: "ዘፍጥረት 21",
      excerpt:
        " ውኃውም ከአቁማዳው አለቀ፤ ብላቴናውንም ከአንድ ቍጥቋጦ በታች ጣለችው፤እርስዋም ሄደች። ብላቴናው ሲሞት አልየው ብላ ቀስት ተወርውሮ የሚደርስበትን ያህል ርቃ በአንጻሩ ተቀመጠች። ፊት ለፊትም ተቀመጠች፥ ቃልዋንም አሰምታ አለቀሰች። እግዚአብሔርም የብላቴናውን ድምፅ ሰማ፤ የእግዚአብሔርም መልአክ ከሰማይ አጋርን እንዲህ ሲል ጠራት። አጋር ሆይ፥ ምን ሆንሽ? እግዚአብሔር የብላቴናውን ድምፅ ባለበት ስፍራ ሰምቶአልና አትፍሪ። ተነሺ፥ ብላቴናውንም አንሺ፥ እጅሽንም በእርሱ አጽኚው፤ ትልቅ ሕዝብ አደርገዋለሁና።",
      author: "Ablavie KOMBATE",
      date: "December 15, 2025",
      category: "Teaching",
    },
    {
      title: "ዕንባቆም 3",
      excerpt:
        "ምንም እንኳ በለስም ባታፈራ፥ በወይንም ሐረግ ፍሬ ባይገኝ፥ የወይራ ሥራ ቢጐድል፥ እርሾችም መብልን ባይሰጡ፥ በጎች ከበረቱ ቢጠፉ፥ ላሞችም በጋጡ ውስጥ ባይገኙ፥እኔ ግን በእግዚአብሔር ደስ ይለኛል፤ በመድኃኒቴ አምላክ ሐሤት አደርጋለሁ።ጌታ እግዚአብሔር ኃይሌ ነው፤ እግሮቼን እንደ ዋላ እግሮች ያደርጋል፤ በከፍታዎችም ላይ ያስሄደኛል።",
      author: "Hiwi",
      date: "December 13, 2025",
      category: "Teaching",
    },
    {
      title: "የሃዋርያት ስራ ምእራፍ 14፥8-10",
      excerpt:
        "8 በልስጥራንም እግሩ የሰለለ፥ ከእናቱም ማኅፀን ጀምሮ አንካሳ የሆነ፥ ከቶም ሄዶ የማያውቅ አንድ ሰው ተቀምጦ ነበር። ይህም ሰው ጳውሎስ ሲናገር ይሰማ ነበር፤ እርሱም ትኵር ብሎ ተመለከተውና ይድን ዘንድ እምነት እንዳለው ባየ ጊዜ፥ በታላቅ ድምፅ፡— ቀጥ ብለህ በእግርህ ቁም፡ አለው። ብድግ ብሎም ተንሥቶ ይመላለስ ነበር።",
      author: "Pastor Teddy Chernet",
      date: "December 5, 2025",
      category: "Teaching",
    },
    {
      title: "መዝሙረ ዳዊት ምዕራፍ 40-ለመዘምራን አለቃ፤ የዳዊት መዝሙር።  ",
      excerpt:
        "ቆይቼ እግዚአብሔር ደጅ ጠናሁት፥ እርሱም ዘንበል አለልኝ ጩኽቴንም ሰማኝ።ከጥፋት ጕድጓድ ከረግረግም ጭቃ አወጣኝ፥ እግሮቼንም በድንጋይ ላይ አቆማቸው፥ አረማመዴንም አጸና። አዲስ ዝማሬን ለአምላካችን ምስጋና በአፌ ጨመረ፤ ብዙዎች ያያሉ ይፈሩማል፥ በእግዚአብሔርም ይታመናሉ።",
      author: "Ablavie KOMBATE",
      date: "December 5, 2025",
      category: "Teaching",
    },
  ];

  return (
    <main className="flex-1">
      <section className="py-16 md:py-24 bg-linear-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-6">
              Blogs
            </h1>
            <p className="text-lg text-center text-muted-foreground mb-12 leading-relaxed">
              Reflections, teachings, and resources to encourage your faith
              journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.map((blog, index) => (
                <Card
                  key={index.toString()}
                  className="bg-card border-border hover:border-primary/50 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <span className="px-2 py-1 rounded-md bg-primary/10 text-primary">
                        {blog.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {blog.date}
                      </span>
                    </div>
                    <h2 className="font-serif text-xl font-semibold mb-2 hover:text-primary transition-colors">
                      <Link href="#">{blog.title}</Link>
                    </h2>
                    <p
                    className={`text-sm text-muted-foreground leading-relaxed mb-4 ${
                      expandedIndex === index ? "" : "line-clamp-2"
                    }`}
                  >
                    {blog.excerpt}
                  </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{blog.author}</span>
                      </div>
                      <button
                        onClick={() =>
                          setExpandedIndex(expandedIndex === index ? null : index)
                        }
                        className="text-sm text-primary hover:underline"
                      >
                        {expandedIndex === index ? "Show less ↑" : "Read more →"}
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
