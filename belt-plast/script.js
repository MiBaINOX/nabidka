document.addEventListener('DOMContentLoaded', function () {
  const catalogData = [{"id": "belta-s", "name": "Konstrukční plast BELTA® S", "category": "materialy", "category_title": "Technické a kluzné plasty", "tech_type": "PE-UHMW / PE-1000", "norm": "ČSN EN ISO 1183", "material": "Ultravysokomolekulární polyethylen", "mol_weight": "4.500.000 – 9.000.000 g/mol", "density": "0,93 g/cm³", "temp_range": "-200 °C až +80 °C", "hardness": "65 Shore D", "wear_resistance": "Extrémní otěruvzdornost (Sand-slurry test 100)", "friction_coeff": "0,10 – 0,15", "description": "Špičkový polymerní materiál tvořený dlouhými uhlovodíkovými řetězci. Vyznačuje se mimořádnou rázovou houževnatostí, nulovou nasákavostí, samomazností a špičkovou odolností vůči kyselinám a louhům.", "applications": "Kluzná vedení řetězů a řemenů, antiabrazivní výstelky zásobníků, přesypy, vodítka láhví, hvězdice plnicích linek.", "features": ["Minimální koeficient tření a samomazné vlastnosti", "Mimořádná odolnost proti rázům i při mrazu (-200 °C)", "Fyziologická nezávadnost pro přímý styk s potravinami", "Absolutní odolnost proti korozi a ulpívání sypkých hmot"], "img": "assets/obrazek_f206.jpg", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Vlastnost</th><th>Zkušební metoda</th><th>Jednotka</th><th>Hodnota BELTA® S</th></tr></thead><tbody><tr><td>Hustota</td><td>ISO 1183</td><td>g/cm³</td><td>0,93</td></tr><tr><td>Molekulová hmotnost</td><td>Viskozimetricky</td><td>g/mol</td><td>4,5 – 9,0 × 10⁶</td></tr><tr><td>Napětí na mezi kluzu</td><td>ISO 527</td><td>MPa</td><td>21</td></tr><tr><td>Rázová houževnatost</td><td>ISO 11542-2</td><td>kJ/m²</td><td>bez lomu</td></tr><tr><td>Tvrdost Shore D</td><td>ISO 868</td><td>-</td><td>65</td></tr><tr><td>Teplotní rozsah použití</td><td>Provozní</td><td>°C</td><td>-200 až +80</td></tr><tr><td>Koeficient tření (suché)</td><td>Tribologický test</td><td>-</td><td>0,12</td></tr></tbody></table></div>"}, {"id": "belta-n", "name": "Konstrukční polyamid BELTA® N", "category": "materialy", "category_title": "Technické a kluzné plasty", "tech_type": "Polyamid PA 6 / PA 6.6", "norm": "ČSN EN ISO 1874", "material": "Litý a extrudovaný polyamid", "mol_weight": "Standardní technický termoplast", "density": "1,14 g/cm³", "temp_range": "-40 °C až +100 °C (krátkodobě +160 °C)", "hardness": "82 Shore D", "wear_resistance": "Vysoká mechanická pevnost a tlumicí schopnost", "friction_coeff": "0,25 – 0,35", "description": "Tužší konstrukční plast s vysokou mechanickou pevností, modulem pružnosti a vynikající schopností tlumit vibrace. Snadno obrobitelný pro výrobu namáhaných strojních součástí.", "applications": "Dělená ozubená kola, pojezdové rolny, kladky lanových drah, kluzná ložiska, tlumicí podložky.", "features": ["Vysoká mez pevnosti v tahu a tlaku", "Vynikající tlumení rázů a vibrací", "Dobrá odolnost proti mechanickému opotřebení", "Možnost dodání s modifikací olejem nebo MoS2"], "img": "assets/obrazek_f245.jpg", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Parametr</th><th>Norma</th><th>Jednotka</th><th>BELTA® N (PA 6)</th></tr></thead><tbody><tr><td>Hustota</td><td>ISO 1183</td><td>g/cm³</td><td>1,14</td></tr><tr><td>Mez kluzu v tahu</td><td>ISO 527</td><td>MPa</td><td>80</td></tr><tr><td>Modul pružnosti v tahu</td><td>ISO 527</td><td>MPa</td><td>3 200</td></tr><tr><td>Tvrdost Shore D</td><td>ISO 868</td><td>-</td><td>82</td></tr><tr><td>Maximální teplota</td><td>Krátkodobá</td><td>°C</td><td>+160</td></tr><tr><td>Trvalá pracovní teplota</td><td>Dlouhodobá</td><td>°C</td><td>-40 až +100</td></tr></tbody></table></div>"}, {"id": "belta-f", "name": "Fluoroplast BELTA® F", "category": "materialy", "category_title": "Technické a kluzné plasty", "tech_type": "PTFE čistý a plněný", "norm": "ČSN EN ISO 12086", "material": "Polytetrafluorethylen", "mol_weight": "Vysokomolekulární fluoropolymer", "density": "2,16 g/cm³", "temp_range": "-200 °C až +260 °C", "hardness": "55 Shore D", "wear_resistance": "Nejvyšší chemická netečnost na trhu", "friction_coeff": "0,06 – 0,10 (nejnižší ze všech pevných látek)", "description": "Unikátní fluorovaný polymer s bezkonkurenčním teplotním rozsahem a prakticky absolutní chemickou odolností vůči všem kyselinám, zásadám i organickým rozpouštědlům.", "applications": "Chemická těsnění, pouzdra v agresivních lázních, vysokoteplotní kluzná uložení, krytí horkých linek.", "features": ["Extrémní rozsah použití od -200 °C do +260 °C", "Nejnižší známý součinitel smykového tření", "100% chemická netečnost a nehořlavost", "Vynikající dielektrické izolační vlastnosti"], "img": "assets/obrazek_f246.jpg", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Parametr</th><th>Zkušební norma</th><th>Jednotka</th><th>BELTA® F (PTFE)</th></tr></thead><tbody><tr><td>Hustota</td><td>ISO 1183</td><td>g/cm³</td><td>2,16</td></tr><tr><td>Pevnost v tahu</td><td>ISO 527</td><td>MPa</td><td>25 – 35</td></tr><tr><td>Tažnost při přetržení</td><td>ISO 527</td><td>%</td><td>250 – 400</td></tr><tr><td>Koeficient tření</td><td>Suché tření</td><td>-</td><td>0,08</td></tr><tr><td>Pracovní teplota min.</td><td>Kryogenní</td><td>°C</td><td>-200</td></tr><tr><td>Pracovní teplota max.</td><td>Trvalá</td><td>°C</td><td>+260</td></tr></tbody></table></div>"}, {"id": "belta-p", "name": "Přesný polyacetal BELTA® P", "category": "materialy", "category_title": "Technické a kluzné plasty", "tech_type": "POM-C / Polyoxymethylen", "norm": "ČSN EN ISO 9988", "material": "Polyacetal kopolymer", "mol_weight": "Technický konstrukční plast", "density": "1,41 g/cm³", "temp_range": "-50 °C až +105 °C", "hardness": "84 Shore D", "wear_resistance": "Vysoká rázová houževnatost a rozměrová stálost", "friction_coeff": "0,20 – 0,28", "description": "Vysokopevnostní technický plast s minimální absorpcí vlhkosti. Díky tomu si zachovává přesné tolerance i ve vlhkém prostředí a pod vodou.", "applications": "Ozubená soukolí, přesné čepy, vodicí kladky, ventily, rozdělovače v potravinářství a farmaceutice.", "features": ["Minimální navlhavost a stálost rozměrů", "Vysoká pružnost a paměťový efekt tvaru", "Certifikace pro kontakt s potravinami (FDA)", "Vynikající obrobitelnost s hladkým povrchem"], "img": "assets/obrazek_f207.jpg", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Vlastnost</th><th>Norma</th><th>Jednotka</th><th>BELTA® P (POM-C)</th></tr></thead><tbody><tr><td>Hustota</td><td>ISO 1183</td><td>g/cm³</td><td>1,41</td></tr><tr><td>Mez kluzu v tahu</td><td>ISO 527</td><td>MPa</td><td>65</td></tr><tr><td>Nasákavost vody (23 °C)</td><td>ISO 62</td><td>%</td><td>0,2</td></tr><tr><td>Tvrdost dle Rockwella</td><td>ISO 2039-2</td><td>M</td><td>84</td></tr><tr><td>Teplotní rozsah</td><td>Trvalý</td><td>°C</td><td>-50 až +105</td></tr></tbody></table></div>"}, {"id": "belta-k", "name": "Průmyslový polyethylen BELTA® K", "category": "materialy", "category_title": "Technické a kluzné plasty", "tech_type": "HMW-PE / PE-500", "norm": "ČSN EN ISO 1183", "material": "Vysokomolekulární polyethylen", "mol_weight": "cca 500.000 g/mol", "density": "0,95 g/cm³", "temp_range": "-100 °C až +80 °C", "hardness": "66 Shore D", "wear_resistance": "Univerzální otěruvzdornost a rázová odolnost", "friction_coeff": "0,15 – 0,20", "description": "Hospodárný vysokomolekulární polyetylén s výbornou kombinací houževnatosti, odolnosti vůči chemikáliím a snadné svařitelnosti.", "applications": "Krájecí desky v potravinářství, mantinely, ochranné pásy, nárazníky, kluzná vedení středního zatížení.", "features": ["Výborný poměr mechanických parametrů a ceny", "Snadná svařitelnost a tepelné tvarování", "Nulová nasákavost vody", "Schváleno pro styk s poživatinami"], "img": "assets/obrazek_f245.jpg", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Parametr</th><th>Norma</th><th>Jednotka</th><th>BELTA® K (PE-500)</th></tr></thead><tbody><tr><td>Hustota</td><td>ISO 1183</td><td>g/cm³</td><td>0,95</td></tr><tr><td>Molekulová hmotnost</td><td>Viskozimetricky</td><td>g/mol</td><td>~0,5 × 10⁶</td></tr><tr><td>Mez kluzu</td><td>ISO 527</td><td>MPa</td><td>27</td></tr><tr><td>Rázová houževnatost</td><td>ISO 179</td><td>kJ/m²</td><td>bez lomu</td></tr><tr><td>Tvrdost Shore D</td><td>ISO 868</td><td>-</td><td>66</td></tr></tbody></table></div>"}, {"id": "belta-hm", "name": "Speciální kluzný plast BELTA® HM", "category": "materialy", "category_title": "Technické a kluzné plasty", "tech_type": "UHMW-PE + MoS2", "norm": "ČSN EN ISO 1183", "material": "Modifikovaný polyethylen s disulfidem molybdenu", "mol_weight": "cca 6.000.000 g/mol", "density": "0,94 g/cm³", "temp_range": "-150 °C až +80 °C", "hardness": "65 Shore D", "wear_resistance": "Zvýšená odolnost proti suchému tření", "friction_coeff": "0,08 – 0,12", "description": "Vysokomolekulární polyetylén legovaný disulfidem molybdenu. Přísada MoS2 poskytuje stálé vnitřní mazání, snižuje koeficient suchého tření a zamezuje jevu stick-slip.", "applications": "Vysoce zatížená kluzná vedení válečkových a destičkových řetězů bez možnosti externího přimazávání.", "features": ["Interní suché mazivo MoS2 integrované v celé hmotě", "Zamezení zadrhávání (anti stick-slip)", "Vysoká UV odolnost a antistatické provedení", "Prodloužená životnost řetězů i vodicího profilu"], "img": "assets/obrazek_f206.jpg", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Vlastnost</th><th>Norma</th><th>Jednotka</th><th>BELTA® HM</th></tr></thead><tbody><tr><td>Hustota</td><td>ISO 1183</td><td>g/cm³</td><td>0,94</td></tr><tr><td>Přísada maziva</td><td>-</td><td>%</td><td>MoS2 mikročástice</td></tr><tr><td>Koeficient tření</td><td>Tribologický test</td><td>-</td><td>0,09</td></tr><tr><td>Tvrdost Shore D</td><td>ISO 868</td><td>-</td><td>65</td></tr><tr><td>Barva</td><td>Opticky</td><td>-</td><td>Černošedá</td></tr></tbody></table></div>"}, {"id": "kola-221", "name": "Dělená ozubená kola série 221", "category": "vyrobky", "category_title": "Dělená kola a kladky pro dopravníky", "tech_type": "Hnací dělená kola rozteče 38,1 mm", "norm": "ČSN 02 3140 / DIN 8153", "material": "Zesílený polyamid / polyacetal + nerezové šrouby", "mol_weight": "Standardní vstřikovaný a obráběný díl", "density": "1,14 g/cm³", "temp_range": "-20 °C až +80 °C", "hardness": "82 Shore D", "wear_resistance": "Optimalizovaný tvar zubu pro destičkové řetězy", "friction_coeff": "0,20", "description": "Dvoudílná dělená hnací kola pro přímoběžné destičkové řetězy s roztečí 38,1 mm (1,5 palce). Dělená konstrukce umožňuje bleskovou výměnu kola přímo na hřídeli bez demontáže ložisek či pohonu.", "applications": "Lahvovenské tratě, balicí linky, přepravníkové dráhy kartonů a paletek.", "features": ["Montáž a demontáž bez stahování hřídele z ložiskových domků", "Dostupné varianty s perodrážkou i hladkým vrtáním", "Počet zubů: 17, 19, 21, 23, 25 zubů", "Spojovací materiál z nerezové oceli A2/A4"], "img": "assets/obrazek_f209.jpg", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Typ kola</th><th>Objednací kód</th><th>Vrtání D [mm]</th><th>Počet zubů</th><th>Průměr roztečný [mm]</th><th>Hlavový průměr [mm]</th></tr></thead><tbody><tr><td>SS SS 17-25</td><td>221.17.25</td><td>25</td><td>17</td><td>105,5</td><td>105,0</td></tr><tr><td>SS SS 17-30</td><td>221.17.30</td><td>30</td><td>17</td><td>105,5</td><td>105,0</td></tr><tr><td>SS SS 17-35</td><td>221.17.35</td><td>35</td><td>17</td><td>105,5</td><td>105,0</td></tr><tr><td>SS SS 17-40</td><td>221.17.40</td><td>40</td><td>17</td><td>105,5</td><td>105,0</td></tr><tr><td>SS SS 19-30</td><td>221.19.30</td><td>30</td><td>19</td><td>117,3</td><td>117,0</td></tr><tr><td>SS SS 21-35</td><td>221.21.35</td><td>35</td><td>21</td><td>129,3</td><td>129,0</td></tr></tbody></table></div>"}, {"id": "kola-222", "name": "Dělená ozubená kola série 222", "category": "vyrobky", "category_title": "Dělená kola a kladky pro dopravníky", "tech_type": "Hnací kola se speciálním profilem zubu", "norm": "ČSN 02 3140", "material": "Vysokopevnostní polyamid PA", "mol_weight": "Technický kompozit", "density": "1,15 g/cm³", "temp_range": "-15 °C až +85 °C", "hardness": "82 Shore D", "wear_resistance": "Zvýšená odolnost proti opotřebení boků zubů", "friction_coeff": "0,22", "description": "Speciální dělená hnací kola konstruovaná pro těžší provozy a náročné trajektorie destičkových dopravníků. Optimalizovaný poloměr přechodu zubové paty eliminuje únavové lomy.", "applications": "Plnicí linky nápojů, mlékárny, pivovary, stáčírny minerálních vod.", "features": ["Robustní provedení se zesíleným věncem a nábojem", "Nerezové spojovací šrouby se samojistnými maticemi", "Blesková servisovatelnost přímo na lince", "Tlumení rázů a hluková redukce provozu"], "img": "assets/obrazek_f210.jpg", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Označení</th><th>BP kód</th><th>Vrtání [mm]</th><th>Zuby</th><th>Roztečný Ø [mm]</th></tr></thead><tbody><tr><td>SS SS 19-25</td><td>222.19.25</td><td>25</td><td>19</td><td>117,3</td></tr><tr><td>SS SS 19-30</td><td>222.19.30</td><td>30</td><td>19</td><td>117,3</td></tr><tr><td>SS SS 21-30</td><td>222.21.30</td><td>30</td><td>21</td><td>129,3</td></tr><tr><td>SS SS 21-40</td><td>222.21.40</td><td>40</td><td>21</td><td>129,3</td></tr><tr><td>SS SS 23-40</td><td>222.23.40</td><td>40</td><td>23</td><td>141,2</td></tr></tbody></table></div>"}, {"id": "kola-223", "name": "Dělená ozubená kola série 223", "category": "vyrobky", "category_title": "Dělená kola a kladky pro dopravníky", "tech_type": "Kola pro destičkové řetězy se záběrem v oblouku", "norm": "DIN 8153", "material": "BELTA® P / Speciální acetal", "mol_weight": "Technický plast", "density": "1,41 g/cm³", "temp_range": "-30 °C až +80 °C", "hardness": "84 Shore D", "wear_resistance": "Vysoká rázová tuhost při dynamickém záběru", "friction_coeff": "0,18", "description": "Ozubená dělená kola vyvinutá pro spolehlivý přenos točivého momentu na destičkové řetězy vedené v obloukových drahách a stoupacích dopravnících.", "applications": "Dopravníky se zatáčkami, spirálové dopravníky, třídicí linky e-commerce a logistiky.", "features": ["Vysoká přesnost dělení zubů pro klidný a plynulý chod", "Minimální namáhání čepů řetězu", "Odolnost vůči mycím roztokům a sanitaci", "Dvoudílné snadno rozebíratelné provedení"], "img": "assets/obrazek_f212.jpg", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Typ kola</th><th>BP kód</th><th>Otvor hřídele [mm]</th><th>Zuby Z</th><th>Vnější Ø [mm]</th></tr></thead><tbody><tr><td>SS 223-17</td><td>223.17.30</td><td>30</td><td>17</td><td>106</td></tr><tr><td>SS 223-19</td><td>223.19.35</td><td>35</td><td>19</td><td>118</td></tr><tr><td>SS 223-21</td><td>223.21.40</td><td>40</td><td>21</td><td>130</td></tr><tr><td>SS 223-23</td><td>223.23.40</td><td>40</td><td>23</td><td>142</td></tr><tr><td>SS 223-25</td><td>223.25.40</td><td>40</td><td>25</td><td>154</td></tr></tbody></table></div>"}, {"id": "kola-225", "name": "Dělená ozubená kola série 225", "category": "vyrobky", "category_title": "Dělená kola a kladky pro dopravníky", "tech_type": "Zesílená hnací kola pro vysoká zatížení", "norm": "ČSN 02 3140", "material": "Tvrzený polyamid PA 6.6 s přísadou skelných vláken", "mol_weight": "Technický kompozit", "density": "1,22 g/cm³", "temp_range": "-25 °C až +90 °C", "hardness": "85 Shore D", "wear_resistance": "Extrémní odolnost při vysokém krouticím momentu", "friction_coeff": "0,24", "description": "Zesílená série dělených ozubených kol určená pro těžké průmyslové dopravníky, kde vznikají rázy při rozběhu plně naložených linek.", "applications": "Konzervárenský průmysl, sklárny, přeprava těžkých kartonů, paletizace.", "features": ["Zesílená konstrukce zubů a upevňovacích nálitků", "Nerezové utahovací šrouby dimenzované na vysoký moment", "Možnost dodání pro čtyřhranné i válcové hřídele", "Bezpečnostní faktor proti protočení na hřídeli"], "img": "assets/obrazek_f216.jpg", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Označení</th><th>BP kód</th><th>Hřídel [mm]</th><th>Počet zubů</th><th>Šířka věnce [mm]</th></tr></thead><tbody><tr><td>SS 225-19</td><td>225.19.35</td><td>35</td><td>19</td><td>42,5</td></tr><tr><td>SS 225-21</td><td>225.21.40</td><td>40</td><td>21</td><td>42,5</td></tr><tr><td>SS 225-23</td><td>225.23.40</td><td>40</td><td>23</td><td>42,5</td></tr><tr><td>SS 225-25</td><td>225.25.50</td><td>50</td><td>25</td><td>42,5</td></tr></tbody></table></div>"}, {"id": "kladky-231", "name": "Dělené volnoběžné kladky série 231", "category": "vyrobky", "category_title": "Dělená kola a kladky pro dopravníky", "tech_type": "Vratné a vodicí rolny bez ozubení", "norm": "DIN 8153", "material": "BELTA® N / BELTA® P", "mol_weight": "Konstrukční termoplast", "density": "1,14 g/cm³", "temp_range": "-20 °C až +80 °C", "hardness": "80 Shore D", "wear_resistance": "Hladký povrch šetrný ke spodní straně řetězu", "friction_coeff": "0,15", "description": "Dvoudílné dělené volnoběžné kladky (rolny) určené pro vratné větve destičkových dopravníků. Zajišťují hladké odvalování řetězu s minimální hlučností.", "applications": "Vratné větve lahvovenských, plechovkových a balicích dopravníků.", "features": ["Dvoudílné provedení pro snadnou výměnu za chodu údržby", "Široká dosedací plocha zabraňující vyvrácení řetězu", "Nerezové utahovací šrouby", "Vysoká rázová odolnost"], "img": "assets/obrazek_f224.jpg", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Typ rolny</th><th>BP kód</th><th>Vrtání D [mm]</th><th>Ekvivalent zubů</th><th>Vnější Ø [mm]</th></tr></thead><tbody><tr><td>R 231-17</td><td>231.17.25</td><td>25</td><td>17</td><td>105,0</td></tr><tr><td>R 231-19</td><td>231.19.30</td><td>30</td><td>19</td><td>117,0</td></tr><tr><td>R 231-21</td><td>231.21.35</td><td>35</td><td>21</td><td>129,0</td></tr><tr><td>R 231-23</td><td>231.23.40</td><td>40</td><td>23</td><td>141,0</td></tr><tr><td>R 231-25</td><td>231.25.40</td><td>40</td><td>25</td><td>153,0</td></tr></tbody></table></div>"}, {"id": "kladky-233", "name": "Dělené vodicí kladky série 233", "category": "vyrobky", "category_title": "Dělená kola a kladky pro dopravníky", "tech_type": "Rolny s oboustranným vodicím nákružkem", "norm": "DIN 8153", "material": "BELTA® P / Zesílený polyamid", "mol_weight": "Technický polymer", "density": "1,41 g/cm³", "temp_range": "-25 °C až +80 °C", "hardness": "82 Shore D", "wear_resistance": "Přesné boční vedení bez vibrací", "friction_coeff": "0,16", "description": "Dvoudílné dělené kladky vybavené zvýšenými vodicími nákružky. Brání bočnímu posunu destičkového řetězu na vratné větvi i při vysokých přepravních rychlostech.", "applications": "Dlouhé dopravníkové tratě, stoupací a klesající úseky linek.", "features": ["Oboustranné vodicí nákružky pro stoprocentní stabilitu řetězu", "Rychlá demontáž povolením dvou nerezových šroubů", "Odolnost proti korozi v mokrém prostředí", "Snížení opotřebení řetězových článků"], "img": "assets/obrazek_f228.jpg", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Typ kladky</th><th>BP kód</th><th>Vrtání [mm]</th><th>Ø vodicí dráhy [mm]</th><th>Celkový Ø [mm]</th></tr></thead><tbody><tr><td>RN 233-19</td><td>233.19.30</td><td>30</td><td>117,0</td><td>135,0</td></tr><tr><td>RN 233-21</td><td>233.21.35</td><td>35</td><td>129,0</td><td>147,0</td></tr><tr><td>RN 233-23</td><td>233.23.40</td><td>40</td><td>141,0</td><td>159,0</td></tr><tr><td>RN 233-25</td><td>233.25.40</td><td>40</td><td>153,0</td><td>171,0</td></tr></tbody></table></div>"}, {"id": "vedeni-t1", "name": "Kluzné vedení řetězu typ T1", "category": "profily", "category_title": "Kluzná vedení a technické profily", "tech_type": "Profilové vedení pro jednořadé válečkové řetězy", "norm": "ČSN 02 3311 / DIN 8187", "material": "BELTA® S (PE-UHMW zelená / černá)", "mol_weight": "cca 6.000.000 g/mol", "density": "0,93 g/cm³", "temp_range": "-200 °C až +80 °C", "hardness": "65 Shore D", "wear_resistance": "Samomazný profil s vysokou odolností proti vymačkání", "friction_coeff": "0,12", "description": "Obráběné kluzné profily pro jednořadé válečkové řetězy od rozteče 9,525 mm (06B-1) do 25,4 mm (16B-1). Zabraňují kontaktu kovu s kovem, tlumí hluk a prodlužují životnost řetězu.", "applications": "Pohony a dopravníky ve strojírenství, potravinářství a dřevozpracujícím průmyslu.", "features": ["Přesné frézované drážky pro dokonalé usazení válečku", "Mimořádně nízký třecí odpor šetří energii motoru", "Kompatibilní s montážními ocelovými C-kanály C3 a C5", "Standardní výrobní délka 2 000 mm a 3 000 mm"], "img": "assets/obrazek_f158.png", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Řetěz (DIN 8187)</th><th>Rozteč p [mm]</th><th>Typ profilu</th><th>Objednací kód</th><th>Rozměr B × H [mm]</th><th>Šířka drážky b1 [mm]</th></tr></thead><tbody><tr><td>06B-1 (3/8\" × 7/32\")</td><td>9,525</td><td>T1 01</td><td>251.01.01</td><td>15 × 10</td><td>5,4</td></tr><tr><td>08B-1 (1/2\" × 5/16\")</td><td>12,700</td><td>T1 02</td><td>251.01.02</td><td>20 × 15</td><td>7,4</td></tr><tr><td>10B-1 (5/8\" × 3/8\")</td><td>15,875</td><td>T1 03</td><td>251.01.03</td><td>20 × 15</td><td>9,2</td></tr><tr><td>12B-1 (3/4\" × 7/16\")</td><td>19,050</td><td>T1 04</td><td>251.01.04</td><td>25 × 15</td><td>11,3</td></tr><tr><td>16B-1 (1\" × 17,02 mm)</td><td>25,400</td><td>T1 05</td><td>251.01.05</td><td>40 × 20</td><td>16,5</td></tr></tbody></table></div>"}, {"id": "vedeni-t2", "name": "Kluzné vedení dvouřadého řetězu typ T2", "category": "profily", "category_title": "Kluzná vedení a technické profily", "tech_type": "Dvoudrážkový profil pro duplexní řetězy", "norm": "ČSN 02 3311 / DIN 8187", "material": "BELTA® S (PE-UHMW)", "mol_weight": "6.000.000 g/mol", "density": "0,93 g/cm³", "temp_range": "-200 °C až +80 °C", "hardness": "65 Shore D", "wear_resistance": "Paralelní drážky s přesným osovým odstupem", "friction_coeff": "0,12", "description": "Masivní kluzný profil pro dvouřadé válečkové řetězy (duplex). Zaručuje absolutně souběžný běh obou řad řetězu bez nežádoucího křížení a bočních vibrací.", "applications": "Těžké paletové dopravníky, akumulační tratě, montážní linky automotive.", "features": ["Přesné CNC frézování obou drážek v jedné upínce", "Tlumí rázy a absorbuje vibrace těžkých břemen", "Možnost vložení do ocelového C-kanálu C9 / C11", "Vysoká rázová pevnost i při teplotách pod bodem mrazu"], "img": "assets/obrazek_f159.png", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Řetěz (DIN 8187)</th><th>Rozteč [mm]</th><th>Typ</th><th>BP kód</th><th>Rozměr B × H [mm]</th><th>Rozteč drážek e [mm]</th></tr></thead><tbody><tr><td>08B-2 (1/2\" Duplex)</td><td>12,700</td><td>T2 02</td><td>251.02.02</td><td>35 × 15</td><td>13,92</td></tr><tr><td>10B-2 (5/8\" Duplex)</td><td>15,875</td><td>T2 03</td><td>251.02.03</td><td>40 × 20</td><td>16,59</td></tr><tr><td>12B-2 (3/4\" Duplex)</td><td>19,050</td><td>T2 04</td><td>251.02.04</td><td>45 × 25</td><td>19,46</td></tr><tr><td>16B-2 (1\" Duplex)</td><td>25,400</td><td>T2 05</td><td>251.02.05</td><td>65 × 30</td><td>31,88</td></tr></tbody></table></div>"}, {"id": "vedeni-ckg", "name": "Kluzné vedení v C-kanálu typ CKG", "category": "profily", "category_title": "Kluzná vedení a technické profily", "tech_type": "Kombinované plast-ocelové vedení", "norm": "DIN 8187 / DIN EN 10025", "material": "Plast BELTA® S + C-profil z pozinkované / nerezové oceli", "mol_weight": "Polymer + ocel", "density": "Kombinovaný profil", "temp_range": "-100 °C až +80 °C", "hardness": "65 Shore D", "wear_resistance": "Samonosný profil s vysokou ohybovou tuhostí", "friction_coeff": "0,12", "description": "Systémové řešení kluzného vedení řetězu, kde je plastová vložka BELTA® S zasunuta do ocelového C-kanálu. Zajišťuje snadné přivaření či přišroubování na konstrukci rámu.", "applications": "Dopravníky s dlouhými rozpony, kde nelze plastový profil podepřít v celé délce.", "features": ["Vysoká ohybová tuhost a nosnost díky ocelovému kanálu", "Možnost snadné výměny plastové vložky pouhým vysunutím", "Provedení kanálu: pozinkovaná ocel nebo nerez AISI 304", "Eliminace tepelné roztažnosti plastu v podélném směru"], "img": "assets/obrazek_f106.gif", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Řetěz DIN 8187</th><th>Typ profilu</th><th>BP kód</th><th>C-kanál</th><th>Šířka B [mm]</th><th>Celková výška H [mm]</th></tr></thead><tbody><tr><td>06B-1</td><td>CKG 01</td><td>251.21.01</td><td>C3</td><td>20</td><td>15</td></tr><tr><td>08B-1</td><td>CKG 02</td><td>251.21.02</td><td>C3</td><td>20</td><td>15</td></tr><tr><td>10B-1</td><td>CKG 03</td><td>251.21.03</td><td>C3</td><td>20</td><td>18</td></tr><tr><td>12B-1</td><td>CKG 04</td><td>251.21.04</td><td>C5</td><td>28</td><td>20</td></tr><tr><td>16B-1</td><td>CKG 05</td><td>251.21.05</td><td>C9</td><td>38</td><td>25</td></tr></tbody></table></div>"}, {"id": "vedeni-remenu-cv", "name": "Kluzné vedení klínových řemenů typ CV", "category": "profily", "category_title": "Kluzná vedení a technické profily", "tech_type": "Profilové vedení klínových a kruhových řemenů", "norm": "ČSN 02 3110 / DIN 2215", "material": "BELTA® S + montážní ocelový C-kanál", "mol_weight": "6.000.000 g/mol", "density": "0,93 g/cm³", "temp_range": "-150 °C až +80 °C", "hardness": "65 Shore D", "wear_resistance": "Chladicí profil s nízkým třením", "friction_coeff": "0,13", "description": "Přesně frézovaný kluzný profil pro vedení klínových řemenů klasických i úzkých průřezů (profily Z/10, A/13, B/17, C/22). Zabraňuje zahřívání pryže a prodlužuje životnost řemenu.", "applications": "Řemenové dopravníky kartonů, přepravních boxů, keramických dlaždic a skla.", "features": ["Optimalizovaný úhel klínové drážky zabraňuje zaklínění řemenu", "Materiál BELTA® S odvádí teplo vznikající třením", "V provedení do C-kanálu (typ CV) i celoplastovém (typ V)", "Chrání textilní a pryžový obal řemenu před odřením"], "img": "assets/obrazek_f90.gif", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Profil řemenu</th><th>Šířka řemenu [mm]</th><th>Typ</th><th>Objednací kód</th><th>C-kanál</th><th>Šířka B [mm]</th><th>Výška H [mm]</th></tr></thead><tbody><tr><td>8 (SPZ/8)</td><td>8</td><td>CV 01</td><td>252.11.01</td><td>C3</td><td>20</td><td>15</td></tr><tr><td>10 (Z/10)</td><td>10</td><td>CV 02</td><td>252.11.02</td><td>C3</td><td>20</td><td>15</td></tr><tr><td>13 (A/13)</td><td>13</td><td>CV 03</td><td>252.11.03</td><td>C5</td><td>28</td><td>18</td></tr><tr><td>17 (B/17)</td><td>17</td><td>CV 04</td><td>252.11.04</td><td>C5</td><td>28</td><td>24</td></tr><tr><td>22 (C/22)</td><td>22</td><td>CV 05</td><td>252.11.05</td><td>C9</td><td>38</td><td>30</td></tr></tbody></table></div>"}, {"id": "vedeni-oblouk", "name": "Oblouková vedení destičkových řetězů", "category": "profily", "category_title": "Kluzná vedení a technické profily", "tech_type": "Jednodrážková a vícedrážková oblouková vedení", "norm": "Dle výkresové dokumentace / DIN 8153", "material": "BELTA® S (přírodní bílá, zelená, černá antistatická)", "mol_weight": "6.000.000 g/mol", "density": "0,93 g/cm³", "temp_range": "-150 °C až +80 °C", "hardness": "65 Shore D", "wear_resistance": "Vysoce přesná CNC obráběná oblouková dráha", "friction_coeff": "0,10 – 0,14", "description": "Zatáčkové segmenty s mechanickým vedením (TAB / Bevel) nebo magnetickým systémem pro destičkové dopravníky. Zajišťují hladký průchod řetězu v poloměrech od 500 do 1 500 mm.", "applications": "Nápojový a balicí průmysl, přeprava lahví a plechovek v obloucích 45°, 90° a 180°.", "features": ["Přesné CNC frézování na 5osých obráběcích centrech", "Provedení jednodrážkové i vícedrážkové pro paralelní tratě", "Možnost integrovaných magnetů pro držení řetězu", "Eliminace opotřebení a plynulý transport bez trhání"], "img": "assets/obrazek_f91.gif", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Typ drážky</th><th>Šířka řetězu [mm]</th><th>Úhel oblouku</th><th>Standardní poloměr R [mm]</th><th>Počet stop</th></tr></thead><tbody><tr><td>TAB (s nákružkem)</td><td>82,5 (K 325)</td><td>90° / 180°</td><td>500, 610, 800</td><td>1 až 6 stop</td></tr><tr><td>Bevel (úkosová)</td><td>82,5 (K 325)</td><td>90° / 180°</td><td>500, 650, 800</td><td>1 až 4 stopy</td></tr><tr><td>Magnetické vedení</td><td>82,5 / 114,3</td><td>90° / 180°</td><td>610, 750, 1000</td><td>1 až 4 stopy</td></tr><tr><td>Zakázkový rádius</td><td>Dle požadavku</td><td>15° až 180°</td><td>300 až 2 500</td><td>Dle výkresu</td></tr></tbody></table></div>"}, {"id": "ocelove-c", "name": "Ocelové nosné C-kanály", "category": "profily", "category_title": "Kluzná vedení a technické profily", "tech_type": "Kovové montážní profily pro kluzná vedení", "norm": "ČSN EN 10162 / DIN 59413", "material": "Pozinkovaná ocel DX51D / Nerezová ocel AISI 304", "mol_weight": "Ocelové profily", "density": "7,85 g/cm³", "temp_range": "-200 °C až +400 °C", "hardness": "Ocelová konstrukce", "wear_resistance": "Vysoká tuhost a korozní odolnost", "friction_coeff": "-", "description": "Tenkostěnné profilované ocelové lišty tvaru C určené k pevnému uchycení plastových kluzných profilů na rám dopravníku. Umožňují volnou tepelnou dilataci plastu.", "applications": "Montáž kluzných vedení řetězů, řemenů a vodicích profilů na ocelové konstrukce.", "features": ["Přesné rozměry pro bezpečné zaklapnutí nebo nasunutí plastu", "Materiálové varianty: žárový zinek nebo nerezová ocel", "Hmotnosti od 0,28 kg/m (C 01) do 1,18 kg/m (C 07)", "Délky: 2 000 mm, 3 000 mm a 6 000 mm"], "img": "assets/obrazek_f100.gif", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Typ kanálu</th><th>Šířka b [mm]</th><th>Výška h [mm]</th><th>Tloušťka s [mm]</th><th>Vnitřní rozteč c [mm]</th><th>Hmotnost [kg/m]</th></tr></thead><tbody><tr><td>Typ C 01</td><td>20</td><td>10</td><td>1,5</td><td>10</td><td>0,28</td></tr><tr><td>Typ C 03</td><td>20</td><td>14</td><td>1,5</td><td>10</td><td>0,49</td></tr><tr><td>Typ C 05</td><td>28</td><td>12</td><td>2,0</td><td>14</td><td>0,86</td></tr><tr><td>Typ C 07</td><td>38</td><td>18</td><td>2,5</td><td>22</td><td>1,18</td></tr></tbody></table></div>"}, {"id": "rosty-standard", "name": "Kompozitní podlahové rošty INTERGRATE® Standard", "category": "rosty", "category_title": "Průmyslové kompozitní podlahové rošty", "tech_type": "Samonosné mřížkové rošty se skleněnými vlákny", "norm": "ČSN EN ISO 14122-2 / DIN 24537-3", "material": "Skelná vlána v isoftalické / vinylesterové pryskyřici", "mol_weight": "Termosetický kompozit", "density": "1,80 g/cm³", "temp_range": "-40 °C až +100 °C", "hardness": "Vysoká rázová tuhost", "wear_resistance": "Protiskluznost třídy R13 (křemičitý posyp)", "friction_coeff": "Protiskluzový povrch", "description": "Vysoce odolné samonosné pochozí rošty pro průmyslové lávky, obslužné plošiny a zakrytí kanálů. Stoprocentně odolné vůči korozi, louhům, kyselinám i slané vodě.", "applications": "Chemické závody, čistírny odpadních vod (ČOV), galvanovny, elektrárny, potravinářství.", "features": ["Absolutní odolnost vůči korozi a agresivním chemikáliím", "Elektrická a magnetická nevodivost pro bezpečnou práci", "Vysoká nosnost při nízké vlastní hmotnosti (cca 1/3 oceli)", "Protiskluzový křemičitý povrch certifikovaný pro mokré provozy"], "img": "assets/obrazek_f240.jpg", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Typ roštu</th><th>Výška roštu [mm]</th><th>Rozměry panelu [mm]</th><th>Rozměr oka [mm]</th><th>Otevřená plocha [%]</th><th>Hmotnost [kg/m²]</th></tr></thead><tbody><tr><td>STANDARD 26</td><td>26</td><td>914 × 3 048 / 1 219 × 2 438</td><td>32 × 32</td><td>70 %</td><td>12,2</td></tr><tr><td>STANDARD 30</td><td>30</td><td>1 225 × 2 980</td><td>32 × 32</td><td>70 %</td><td>14,1</td></tr><tr><td>STANDARD 38</td><td>38</td><td>914 × 3 048 / 1 219 × 3 658</td><td>32 × 32</td><td>70 %</td><td>18,3</td></tr><tr><td>SAFESTEP 38</td><td>38</td><td>585 × 2 980 (schodišťový)</td><td>32 × 32</td><td>70 %</td><td>20,5</td></tr><tr><td>SCREENGRID 13</td><td>13</td><td>1 225 × 4 580</td><td>45 × 45</td><td>78 %</td><td>3,9</td></tr></tbody></table></div>"}, {"id": "rosty-micromesh", "name": "Kompozitní mikro-rošty INTERGRATE® Micromesh", "category": "rosty", "category_title": "Průmyslové kompozitní podlahové rošty", "tech_type": "Rošty s jemnou mikromřížkou", "norm": "ČSN EN ISO 14122-2", "material": "Isoftalická / vinylesterová kompozitní pryskyřice", "mol_weight": "Kompozit", "density": "1,85 g/cm³", "temp_range": "-40 °C až +100 °C", "hardness": "Rázuvzdorný kompozit", "wear_resistance": "Protiskluzový korundový povrch R13", "friction_coeff": "Protiskluzový", "description": "Bezpečnostní kompozitní rošt s mikroskopickým okem 13×13 mm (horní vrstva). Zabraňuje propadnutí předmětů o průměru větším než 15 mm na pracoviště pod plošinou.", "applications": "Pochozí lávky nad technologickými linkami, schodiště, pojezdové rampy ručních vozíků.", "features": ["Splňuje přísnou evropskou bezpečnostní normu pro lávky nad lidmi", "Pohodlná chůze i v běžné obuvi a snadný pojezd kolečkových vozíků", "Vysoká chemická a UV odolnost", "Jednoduché formátování přímo na montáži úhlovou bruskou"], "img": "assets/obrazek_f241.jpg", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Typ roštu</th><th>Výška [mm]</th><th>Rozměr panelu [mm]</th><th>Rozměr oka [mm]</th><th>Volná plocha [%]</th><th>Hmotnost [kg/m²]</th></tr></thead><tbody><tr><td>MICROMESH 30</td><td>30</td><td>1 000 × 1 990 / 1 000 × 2 980</td><td>13 × 13</td><td>48 %</td><td>17,0</td></tr><tr><td>MICROMESH 38</td><td>38</td><td>1 645 × 2 978</td><td>13 × 13</td><td>48 %</td><td>21,2</td></tr></tbody></table></div>"}, {"id": "obklady-uhmw", "name": "Kluzné a antiabrazivní obklady zásobníků BELTA®", "category": "obklady", "category_title": "Obklady zásobníků a skluzů sypkých hmot", "tech_type": "Deskové obložení stěn zásobníků, přesypů a skluzů", "norm": "ČSN 26 8000 / ISO 1183", "material": "BELTA® S (PE-UHMW se speciálními kluznými aditivy)", "mol_weight": "cca 7.500.000 g/mol", "density": "0,93 g/cm³", "temp_range": "-150 °C až +80 °C", "hardness": "65 Shore D", "wear_resistance": "Minimální přilnavost a vysoká otěruvzdornost", "friction_coeff": "0,10 – 0,12", "description": "Komplexní řešení obkladů pro zařízení manipulující se sypkými materiály. Eliminuje tvorbu kleneb, komínů, nálepů a chrání ocelové stěny zásobníků před prodřením.", "applications": "Zásobníky uhlí v elektrárnách, cementárny, vápenné pece, sklárny, zemědělská sila na obilí a šroty.", "features": ["Spolehlivě odstraňuje nalepování vlhkých a jemnozrnných surovin", "Podstatně snižuje odpor toku a umožňuje gravitační vyprazdňování", "Snižuje hluk při sesypávání těžkých materiálů", "Montáž pomocí navařovacích čepů nebo speciálních šroubů s krytkou"], "img": "assets/obrazek_f206.jpg", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Parametr obkladu</th><th>Zkušební norma</th><th>Jednotka</th><th>Naměřená hodnota</th></tr></thead><tbody><tr><td>Tloušťka desek</td><td>Standardní řada</td><td>mm</td><td>8, 10, 12, 15, 20, 25</td></tr><tr><td>Mezní úhel skluzu pro uhlí</td><td>Laboratorní test</td><td>stupně</td><td>15° (oproti 35° u oceli)</td></tr><tr><td>Koeficient tření za pohybu</td><td>Suchý stav</td><td>-</td><td>0,12</td></tr><tr><td>Absorpce vlhkosti</td><td>ISO 62</td><td>%</td><td>< 0,01</td></tr><tr><td>Rázová houževnatost s vrubem</td><td>ISO 11542-2</td><td>kJ/m²</td><td>bez porušení</td></tr></tbody></table></div>"}, {"id": "vestavba-crystalen", "name": "Patentovaná vestavba zásobníků Crystalen®", "category": "obklady", "category_title": "Obklady zásobníků a skluzů sypkých hmot", "tech_type": "Pasivní usměrňovač toku v zásobníku", "norm": "Patentovaný systém BELT PLAST", "material": "Nerezová ocel + obklad materiálem BELTA® S", "mol_weight": "Patentované inženýrské zařízení", "density": "-", "temp_range": "-40 °C až +120 °C", "hardness": "-", "wear_resistance": "Řeší klenbování bez nutnosti vnějších vibrací", "friction_coeff": "0,11", "description": "Autorský a patentovaný systém vestaveb pro zásobníky sypkých hmot. Těleso Crystalen® svou specifickou polohou v kuželu zásobníku mění tlakové poměry, rozšiřuje zónu toku a spolehlivě zabraňuje vzniku komínů a kleneb.", "applications": "Zásobníky popílku, vápence, sádrovce, uhelného prachu, krmných směsí a chemických granulátů.", "features": ["Zajišťuje plynulý hmotový tok (mass flow) celým objemem zásobníku", "Eliminuje nutnost instalace energeticky náročných vibrátorů a tlouků", "Zabraňuje segregaci frakcí a degradaci skladovaného materiálu", "Plně bezúdržbové pasivní řešení s dlouhou životností"], "img": "assets/obrazek_f43.jpg", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Vlastnost řešení</th><th>Tradiční zásobník</th><th>Zásobník s vestavbou Crystalen®</th></tr></thead><tbody><tr><td>Režim toku</td><td>Nálevkový (komínový) tok</td><td>Hmotový (celistvý) tok</td></tr><tr><td>Riziko tvorby kleneb</td><td>Vysoké při vlhkosti > 5 %</td><td>Zcela eliminováno</td></tr><tr><td>Zbytkové nálipky</td><td>Až 30 % objemu násypky</td><td>0 % (úplné vyprázdnění)</td></tr><tr><td>Potřeba vibrátorů</td><td>Trvalý rázový provoz</td><td>Není nutná žádná vnější energie</td></tr><tr><td>Dynamické rázy na konstrukci</td><td>Riziko destrukce při propadu</td><td>Rovnoměrné klidové zatížení</td></tr></tbody></table></div>"}, {"id": "plastove-nadoby", "name": "Zakázkové plastové nádoby a násypky", "category": "obklady", "category_title": "Zakázková výroba a zpracování plastů", "tech_type": "Svařované chemické nádoby a odměrky", "norm": "ČSN EN 12573 / DVS 2205", "material": "Polypropylen (PP), Polyethylen (PE-HD), PVDF", "mol_weight": "Termoplasty", "density": "0,91 – 1,78 g/cm³", "temp_range": "-20 °C až +100 °C", "hardness": "Dle materiálu nádoby", "wear_resistance": "100% chemická odolnost proti kyselinám a louhům", "friction_coeff": "-", "description": "Zakázková výroba chemických van, technologických odměrek, násypek a vážicích nádob. Nádoby jsou lehké, nemagnetické, odolné proti agresivním chemickým médiím a plně těsné.", "applications": "Galvanické linky, chemický průmysl, laboratorní provozy, dávkovací systémy sypkých hmot.", "features": ["Výroba na míru dle výkresové dokumentace nebo zaměření na místě", "Svařování dle přísných německých norem DVS certifikovanými svářeči", "Nemagnetické provedení ideální pro vážicí a dávkovací stanice", "Možnost osazení přírubami, ventily a hladinoměry"], "img": "assets/obrazek_f40.jpg", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Parametr výroby</th><th>Rozsah / Možnosti</th><th>Poznámka</th></tr></thead><tbody><tr><td>Objem nádob</td><td>10 litrů až 10 000 litrů</td><td>Válcové i hranaté provedení</td></tr><tr><td>Použité materiály</td><td>PP-H, PE 100, PVC-U, PVDF</td><td>Volba dle chemického média</td></tr><tr><td>Technologie spojování</td><td>Extruzní svařování, horkovzdušné svařování</td><td>Protokol o tlakové zkoušce</td></tr><tr><td>Výbava</td><td>Příruby DIN, hrdla, stavoznaky, víka</td><td>Dle přání zákazníka</td></tr></tbody></table></div>"}, {"id": "projekce-sluzby", "name": "Inženýring, rekonstrukce zásobníků a CNC obrábění", "category": "obklady", "category_title": "Zakázková výroba a zpracování plastů", "tech_type": "Komplexní projekční a montážní služby", "norm": "ČSN EN ISO 9001", "material": "Inženýrské a montážní práce", "mol_weight": "-", "density": "-", "temp_range": "-", "hardness": "-", "wear_resistance": "Více než 30 let praktických zkušeností od roku 1994", "friction_coeff": "-", "description": "Komplexní inženýrské služby v oblasti dopravy a skladování sypkých hmot: analýza stávajícího stavu, optimalizace geometrie skluzů a přesypů, projekty rekonstrukcí, CNC třískové obrábění a montáž na klíč.", "applications": "Elektrárny, teplárny, lomy, štěrkovny, sklářské provozy, potravinářské závody.", "features": ["Vypracování kompletní projektové dokumentace a 3D modelů", "Přesné CNC frézování a soustružení plastových dílců", "Montážní týmy s certifikací pro práce ve výškách a těžkém průmyslu", "Záruční i pozáruční servis a technická diagnostika toku"], "img": "assets/obrazek_f75.jpg", "table": "<div class=\"tm-table-wrap\" style=\"overflow-x:auto;max-width:100%;\"><table class=\"tech-table\"><thead><tr><th>Fáze realizace</th><th>Obsah činnosti</th><th>Výstup pro klienta</th></tr></thead><tbody><tr><td>1. Diagnostika</td><td>Měření tokových vlastností a kontrola geometrie</td><td>Technická zpráva s doporučením</td></tr><tr><td>2. Projekce</td><td>Výpočty toku, návrh vestavby Crystalen® a obkladu</td><td>Výrobní výkresy a CAD modely</td></tr><tr><td>3. Výroba</td><td>CNC obrábění profilů a prefabrikace desek</td><td>Přesné díly připravené na montáž</td></tr><tr><td>4. Montáž</td><td>Instalace obkladů přímo v areálu zákazníka</td><td>Předávací protokol a zkouška toku</td></tr></tbody></table></div>"}];

  const catalogItemsMap = {};
  catalogData.forEach(function (item) {
    catalogItemsMap[item.id] = item;
  });

  const searchInput = document.getElementById('catalogSearch');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.catalog-item-card');
  const itemCountEl = document.getElementById('itemCount');
  const noResultsMsg = document.getElementById('noResultsMsg');
  const btnResetFilters = document.getElementById('btnResetFilters');

  let currentCategory = 'all';
  let searchQuery = '';

  function filterCatalog() {
    let visibleCount = 0;
    const q = searchQuery.toLowerCase().trim();

    cards.forEach(function (card) {
      const cardCat = card.getAttribute('data-category');
      const cardText = card.textContent.toLowerCase();

      const matchesCat = (currentCategory === 'all' || cardCat === currentCategory);
      const matchesSearch = (!q || cardText.indexOf(q) !== -1);

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (itemCountEl) {
      itemCountEl.textContent = visibleCount;
    }

    if (noResultsMsg) {
      noResultsMsg.style.display = (visibleCount === 0) ? 'block' : 'none';
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = searchQuery ? 'block' : 'none';
      }
      filterCatalog();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', function () {
      searchInput.value = '';
      searchQuery = '';
      searchClearBtn.style.display = 'none';
      filterCatalog();
      searchInput.focus();
    });
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      filterCatalog();
    });
  });

  if (btnResetFilters) {
    btnResetFilters.addEventListener('click', function () {
      currentCategory = 'all';
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      if (searchClearBtn) searchClearBtn.style.display = 'none';
      filterBtns.forEach(function (b) {
        if (b.getAttribute('data-filter') === 'all') {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
      filterCatalog();
    });
  }

  const modal = document.getElementById('techModalBackdrop');
  const modalClose = document.getElementById('techModalClose');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalInquireBtn = document.getElementById('modalInquireBtn');

  const modalTitle = document.getElementById('modalTitle');
  const modalCategoryTag = document.getElementById('modalCategoryTag');
  const modalImg = document.getElementById('modalImg');
  const modalTechType = document.getElementById('modalTechType');
  const modalNorm = document.getElementById('modalNorm');
  const modalTemp = document.getElementById('modalTemp');
  const modalHardness = document.getElementById('modalHardness');
  const modalWear = document.getElementById('modalWear');
  const modalDesc = document.getElementById('modalDesc');
  const modalApps = document.getElementById('modalApps');
  const modalTableWrap = document.getElementById('modalTableWrap');

  function openTechModal(id) {
    const item = catalogItemsMap[id];
    if (!item || !modal) return;

    if (modalTitle) modalTitle.textContent = item.name;
    if (modalCategoryTag) modalCategoryTag.textContent = item.category_title;
    if (modalImg) {
      modalImg.src = item.img;
      modalImg.alt = item.name;
    }
    if (modalTechType) modalTechType.textContent = item.tech_type;
    if (modalNorm) modalNorm.textContent = item.norm;
    if (modalTemp) modalTemp.textContent = item.temp_range;
    if (modalHardness) modalHardness.textContent = item.hardness;
    if (modalWear) modalWear.textContent = item.wear_resistance;
    if (modalDesc) modalDesc.textContent = item.description;
    if (modalApps) modalApps.textContent = item.applications;
    if (modalTableWrap) modalTableWrap.innerHTML = item.table || '';

    if (modalInquireBtn) {
      modalInquireBtn.setAttribute('href', '#kontakt');
    }

    modal.style.display = 'flex';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeTechModal() {
    if (!modal) return;
    modal.style.display = 'none';
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', function (e) {
    const trigger = e.target.closest('[data-open-tech]');
    if (trigger) {
      e.preventDefault();
      const id = trigger.getAttribute('data-open-tech');
      openTechModal(id);
    }
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeTechModal);
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeTechModal);
  }

  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeTechModal();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeTechModal();
    }
  });

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach(function (el) {
    revealObserver.observe(el);
  });

  let countersAnimated = false;
  const statsStrip = document.querySelector('.stats-strip');

  function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    document.querySelectorAll('.counter-val').forEach(function (counter) {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      counter.textContent = '0';
      const duration = 1600;
      const start = 0;
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        const current = Math.floor(start + (target - start) * easeOutQuad);
        counter.textContent = current;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          counter.textContent = target;
        }
      }

      requestAnimationFrame(update);
    });
  }

  if (statsStrip) {
    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounters();
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    counterObserver.observe(statsStrip);
  }

  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('active');
      });
    });
  }

  const urlParams = new URLSearchParams(window.location.search);
  const isProposal = urlParams.get('ref') === 'nabidka' || window.location.hash.indexOf('nabidka') !== -1;
  const proposalBanner = document.getElementById('proposalBanner');

  if (isProposal) {
    try {
      localStorage.setItem('bp_proposal_view', '1');
    } catch (e) {}
    if (proposalBanner) {
      proposalBanner.style.display = 'block';
    }
  } else {
    try {
      if (localStorage.getItem('bp_proposal_view') === '1' && proposalBanner) {
        proposalBanner.style.display = 'block';
      }
    } catch (e) {}
  }

  window.handleFormSubmit = function () {
    const successBox = document.getElementById('formSuccess');
    const form = document.getElementById('inquiryForm');
    const submitBtn = document.getElementById('btnSubmit');

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.6';
    }

    setTimeout(function () {
      if (successBox) {
        successBox.style.display = 'block';
      }
      if (form) {
        form.reset();
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
      }
    }, 400);
  };
});
