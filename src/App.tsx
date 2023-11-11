import classNames from "classnames";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import NavMob from "./components/nav/NavMob";

const App = () => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleNav = (): void => setIsOpened(!isOpened);

  useEffect(() => {
    if (isOpened) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpened]);

  const mainClasses = classNames("h-full pt-[100px] transition-padding duration-300", {
    "h-screen overflow-y-scroll pl-[270px] md:pl-[300px] lg:pl-0": isOpened
  });

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  return (
    <>
      <Header isOpened={isOpened} toggleNav={toggleNav} />
      <NavMob categories={categories} isOpened={isOpened} />
      <main className={mainClasses}>
        <div className="container m-auto">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            rem modi assumenda nesciunt. Placeat et nostrum tempora ea sed.
            Quidem quod, excepturi necessitatibus perspiciatis nemo iure quae
            enim pariatur. Fuga! Cupiditate nobis quos nam quaerat nulla quae
            amet voluptas distinctio laborum quas a consequuntur possimus,
            consequatur, perspiciatis nihil perferendis aspernatur iste. Sequi,
            ea. Magnam suscipit vel consequatur architecto, aliquid quis.
            Exercitationem aliquid odit aperiam dicta suscipit quod iusto, earum
            nisi assumenda fugiat quasi aut inventore dolor laborum dolorem
            soluta autem, voluptatem accusamus nostrum sunt id. Aliquam deserunt
            voluptas non molestias. Nulla deserunt impedit ipsum quis amet id
            sunt nostrum, quibusdam accusamus velit deleniti molestias
            exercitationem iste consequuntur dolorem illo eligendi. Placeat
            pariatur similique ea perferendis, accusantium sint a. Quasi,
            officiis. Magnam cum, ab harum quo deleniti aliquam nisi officia
            dignissimos reprehenderit repellendus officiis dicta illum culpa
            ratione, quasi repudiandae, odio eligendi eos sequi veniam.
            Aspernatur nemo voluptate cumque architecto dicta! Animi
            reprehenderit suscipit illo vel saepe architecto hic temporibus nam
            reiciendis, assumenda sequi inventore! Repellendus eaque in
            dignissimos molestias consequuntur praesentium consequatur neque
            omnis alias? Corporis quam nulla nobis tempora. Corporis dolore
            deleniti modi non ducimus ipsum sint dicta cupiditate distinctio ex
            nisi assumenda quisquam similique culpa aliquam, odio amet!
            Reiciendis, ad soluta. Sunt ipsa soluta amet ipsam aut laudantium.
            Quaerat voluptas error architecto, distinctio similique sint nostrum
            dolor natus illo praesentium eligendi sunt veniam omnis ad quo at
            cumque reiciendis id. Necessitatibus cupiditate dolores provident
            nihil iste temporibus eligendi. Delectus illum similique minima aut,
            rerum porro nemo ducimus fuga repudiandae, architecto, harum eius
            accusamus reprehenderit? Quisquam hic accusamus totam voluptate
            nobis quae, repellat facilis saepe animi incidunt, amet
            reprehenderit? Numquam ex quam explicabo esse illum repudiandae
            quasi dicta quae, laborum maiores quas voluptatem labore fugit?
            Provident magnam ducimus earum delectus nam ipsa eligendi,
            reiciendis obcaecati voluptatibus pariatur magni consectetur?
            Reprehenderit neque at minima suscipit et perferendis doloremque
            commodi repellat, culpa consectetur repellendus quo possimus rerum
            veniam cumque dignissimos beatae, quam deserunt explicabo eveniet.
            Dicta, accusantium vero? Facilis, soluta perferendis. Quibusdam,
            incidunt voluptas? Iure sit voluptates dolore quisquam tenetur odio!
            Dolores numquam exercitationem alias molestiae aspernatur ratione
            odio maxime eos tenetur nostrum perferendis suscipit, deleniti quasi
            est accusamus, repellendus cupiditate. Officia itaque ex error, ut
            libero mollitia voluptatem ab nisi, obcaecati et voluptates ullam
            repellendus. Autem veniam odio repudiandae reprehenderit, non
            temporibus magnam suscipit quod minus qui corporis voluptates
            nesciunt! Praesentium officiis quisquam, ab perferendis accusantium
            error distinctio inventore ratione eaque dicta id repudiandae
            temporibus? Laborum vel nulla, vero ipsum a harum ex, similique,
            beatae animi fugiat numquam recusandae voluptatum. Magni repellat
            hic eum laudantium maxime ipsam blanditiis error quisquam, earum
            corporis voluptate maiores praesentium quas cumque similique. Velit
            officiis voluptate cupiditate esse quo molestiae magni nisi, porro
            consequatur sunt! Odit temporibus blanditiis fuga optio cumque
            illum, exercitationem tempore ab enim alias officia animi quam vero
            eligendi, quis voluptate ipsa adipisci consectetur modi corporis quo
            voluptates eveniet? Vero, dolorum consequatur? Veniam quidem dolore
            impedit vero, dolorum nihil, recusandae harum, tempore consequatur
            laborum rem dignissimos voluptatum deserunt laudantium! Similique
            soluta voluptas aliquam fugiat. Consequatur mollitia, ullam earum
            nam voluptas non possimus. Vero sit atque eos? Quam ullam corporis
            hic neque unde minus expedita vero, illum obcaecati quibusdam
            incidunt qui ratione eaque impedit repellendus quae fuga fugit.
            Corporis nam ipsam repellendus repudiandae. Suscipit quia assumenda
            saepe illo? Ex ratione qui sint nesciunt molestiae architecto id,
            voluptatem maxime laudantium incidunt quos eligendi sed soluta nobis
            accusamus, dolore ipsum vel dicta natus nisi. Facilis. Velit, cum
            praesentium. Blanditiis at provident tenetur ex itaque cum
            reiciendis. Sit ullam soluta rerum animi exercitationem saepe nam
            earum blanditiis impedit sapiente voluptatum, laudantium totam nemo
            eaque eos enim? Et assumenda ipsum doloremque, ipsam temporibus
            consectetur officiis sapiente repellendus facere similique, natus
            incidunt molestiae. Totam ullam commodi eligendi eos quos animi
            perferendis id et quas incidunt? Neque, provident error? Quod nobis
            hic ab eligendi architecto! Et est animi ullam pariatur deleniti ut
            ea itaque, possimus laudantium dicta eligendi dolorem obcaecati.
            Perferendis officiis nesciunt, sint eos aperiam quia magni id!
            Error, quaerat? Ratione placeat vero, earum nulla officia facilis
            omnis, et repudiandae dolorem esse iste quam ipsam, tempore corrupti
            atque hic ad reprehenderit ex libero voluptatum autem? Quibusdam,
            odit praesentium. Odio, ipsam neque deserunt, voluptates quidem
            molestiae atque amet expedita possimus qui nesciunt numquam? Velit
            obcaecati voluptatem adipisci! Assumenda omnis accusamus atque
            labore, eos explicabo dicta ducimus quod voluptatibus magnam!
            Deleniti eius non, mollitia quos perferendis maxime ex soluta
            minima, aliquid ut tempora voluptates, labore ducimus accusantium
            consequuntur blanditiis consequatur aspernatur possimus porro
            expedita repudiandae quaerat? Officia sapiente at magnam. Enim ullam
            quaerat soluta dignissimos quibusdam velit ea iste, expedita,
            explicabo nulla consequatur, reiciendis officiis aut? Porro eaque
            consequatur nihil nobis, incidunt eveniet nisi harum laborum eum
            tempore iure ad. Ipsam fuga enim omnis recusandae reiciendis magnam
            quos vel, id suscipit distinctio animi ipsa harum nihil temporibus
            voluptas et error vero aspernatur consequuntur, eum laboriosam fugit
            aut. Repellat, expedita rerum? Fuga temporibus, reiciendis nisi
            repellendus facilis, cum tempore atque id veritatis ullam, nesciunt
            debitis nobis asperiores pariatur accusamus corporis quibusdam. Illo
            provident, incidunt minus sequi rerum praesentium facilis ad
            accusantium. Voluptatum rerum vitae iste, quisquam eveniet quae,
            assumenda a minus consequatur culpa ipsam, asperiores laudantium
            explicabo provident maiores repellendus odit excepturi delectus
            incidunt quidem eum obcaecati! Ex pariatur laborum expedita?
            Mollitia sunt magni iusto excepturi, beatae rem. Quae quo,
            voluptates assumenda molestiae in doloribus voluptatum consequuntur
            necessitatibus ea neque, laudantium voluptatibus. Neque tempore
            dolor sunt libero accusamus. Voluptatem, soluta voluptatibus? Facere
            provident non quisquam, corporis adipisci deleniti deserunt
            laudantium totam quaerat debitis in amet ratione repellendus
            corrupti? Laborum sapiente, ducimus nemo velit impedit corrupti
            dignissimos inventore, error distinctio alias itaque. Ut, impedit,
            voluptatum eius eaque quod, facere quia autem asperiores assumenda
            quasi itaque dolores? Commodi optio iusto sit. Saepe, asperiores.
            Velit quidem sit deleniti ex consectetur nostrum. Autem, maxime
            magnam! Quo, aspernatur facilis tenetur, modi culpa incidunt
            laboriosam magni aliquid in exercitationem laudantium suscipit amet
            omnis obcaecati quas ratione cumque hic est minus. Architecto totam
            velit, reprehenderit eos similique quidem. Eveniet cumque, facilis,
            ab id illum suscipit dicta magni excepturi aliquam quasi ipsum
            porro? Atque, ullam perspiciatis sed ipsum odit ratione aspernatur
            rem accusantium necessitatibus praesentium eos. Vero, error
            accusamus? Nisi iure necessitatibus soluta quasi ea consequatur?
            Quidem ipsa commodi in ab eius dolore fuga officiis dolores quam ea,
            voluptas ipsam quos reiciendis reprehenderit, atque assumenda nulla
            quia dignissimos illo! Reprehenderit accusantium nobis amet mollitia
            sequi, assumenda suscipit quasi eaque qui iste facilis at maxime
            odio consequuntur. Neque nesciunt, explicabo odit dolore iure ut
            debitis placeat, nobis odio aut quae! Id molestiae blanditiis
            doloremque. Molestiae saepe voluptates esse perspiciatis quis enim
            maxime nostrum sint nam! Illum eum, mollitia pariatur ipsam deleniti
            aut quis labore fuga quos reprehenderit molestiae totam quae! Optio
            tempora illum minus ullam in dolores sapiente ut incidunt tenetur.
            Voluptatum delectus, non pariatur atque nostrum aperiam consequatur
            facilis, totam natus neque qui tempore cumque officia doloribus
            magnam quidem? Reprehenderit, quasi exercitationem quae aut iure sit
            aliquid pariatur, quidem porro nostrum sint? Hic non alias,
            perferendis, corrupti explicabo exercitationem repudiandae impedit
            fugit quibusdam rerum harum accusantium excepturi! Unde, nostrum?
            Ducimus, eos reprehenderit explicabo vero, neque perspiciatis
            voluptas dolores asperiores nemo odio, praesentium deleniti culpa
            quibusdam commodi repellendus ipsam voluptate. Libero error veniam
            ipsum fuga sequi possimus accusantium. Enim, placeat. Sunt id
            sapiente omnis repudiandae aliquid. Cupiditate aspernatur
            necessitatibus fuga, explicabo sit facilis nam earum at beatae! Sit
            ullam, odit eveniet corporis velit modi aut, minima alias tempora
            hic rerum. Sit delectus quo magnam rerum ex soluta distinctio
            consequatur ipsam commodi sequi, minus eaque at esse pariatur id
            obcaecati libero! Alias quod, vel sit veniam ipsa distinctio facilis
            dolorum vero! Totam iste enim recusandae perferendis consectetur
            nisi ratione provident voluptate ipsum laboriosam et, quasi omnis
            accusamus deleniti illum tempora id illo delectus fuga cumque unde
            dignissimos? Eaque veritatis ipsum eligendi! Id rerum, cum soluta
            recusandae inventore minus dolorem dolorum iste explicabo? Eum
            architecto placeat tempora natus, fuga porro omnis possimus neque
            assumenda, iste ipsa adipisci. Quia, porro soluta. Aliquam, maiores.
            Modi sapiente odio maxime aliquid non, amet velit beatae culpa
            aperiam iusto, dolorum nostrum exercitationem nobis ut quia
            suscipit. Quae magni sed rerum, natus ex unde possimus nam illum
            adipisci. Iusto esse dolorum nesciunt saepe fugiat ullam ea sapiente
            minima quas. Maxime nulla itaque soluta doloribus. Sint nemo
            perferendis ex aliquid quisquam necessitatibus? Quidem illum quasi,
            perferendis ratione asperiores consequuntur. Inventore quidem
            excepturi, aspernatur quaerat facilis labore accusantium in nihil
            ipsum cum aliquam molestias pariatur exercitationem deleniti
            voluptate reprehenderit laboriosam corporis, delectus corrupti. Sit
            ratione ut laboriosam nulla at omnis. Incidunt cumque dolores
            assumenda ratione fugiat sapiente suscipit odio possimus qui
            repudiandae ut aperiam maiores ex vero ad, quis laudantium corporis?
            Repudiandae ratione officia asperiores omnis beatae ipsa delectus
            corporis. Incidunt autem at, sapiente soluta nisi, a accusantium
            dolore voluptatem quos totam voluptates voluptatibus ipsa nulla!
            Accusamus, laudantium! Animi impedit eius voluptates officiis, vitae
            ullam enim aliquam deleniti voluptatum assumenda. Sunt cumque magni
            eligendi pariatur. Doloremque nam, animi iste nisi praesentium
            nostrum tenetur? Reiciendis est eos amet voluptatem deserunt
            expedita cumque vitae provident, eaque, quaerat ad a cupiditate
            aliquid! Accusamus. Vel cum facere dolore alias error nemo eum, ab
            minus sunt, eius magni, adipisci ad saepe vero illo. Odio vitae
            placeat minima hic iure quod quis facere commodi eos deleniti.
            Pariatur ab ut natus, sapiente aspernatur obcaecati amet, nam
            laboriosam, deserunt debitis sed modi vero corrupti est iusto a
            molestiae! Cupiditate, non molestias aut ex id nam quis eum saepe?
            Vero voluptates corrupti, pariatur tempore nulla qui, asperiores
            aliquam provident nemo cum nesciunt repellendus, facere enim?
            Dolorum eligendi corporis fuga, ullam autem architecto aperiam
            tempora assumenda, sequi, reprehenderit vel dolores! Maiores aut at
            voluptas quas eum assumenda, tenetur amet officiis facilis soluta,
            fuga a, incidunt quae illum. At, corporis laudantium. Earum ea
            cupiditate distinctio error harum obcaecati magnam quod rem. Enim
            cum possimus, deleniti, explicabo quidem, magni voluptatum sint
            nobis ab reprehenderit voluptas corporis delectus itaque mollitia
            iusto dolorum veniam sapiente. Similique, temporibus? Libero,
            cupiditate minima! Dolores amet obcaecati velit. Iusto, in. Fuga
            quis quisquam quidem et iste a id quam quasi asperiores doloribus
            illo, dolores aliquid laborum minus dicta sapiente! Dignissimos
            sequi corrupti facere asperiores eius quisquam nihil ex. Iusto ipsa
            harum sapiente optio placeat cum dignissimos aliquid quibusdam eum
            et eos amet nihil enim provident ullam, rem reiciendis sed officiis
            dolorum vitae expedita cupiditate, quisquam earum. Ea, nam? Odit
            soluta nulla dolorem eligendi? Magnam, eveniet! Doloribus blanditiis
            aut quod dolor, vel ad numquam est sunt eaque quae? Consequatur quia
            excepturi veritatis natus deserunt eligendi ut et fugit laudantium.
            Optio pariatur perspiciatis repudiandae harum nulla ab dolore dicta
            dolorum voluptatum animi excepturi asperiores veniam quaerat eaque
            sapiente dignissimos vitae at facilis reprehenderit non facere, fuga
            beatae laborum. Dolor, quas! Quisquam minus eum porro sunt nesciunt
            odit ipsa quam deserunt maxime quod! Voluptates adipisci voluptatum
            hic perferendis excepturi quo repellendus illum esse, aspernatur
            ipsum vel rem blanditiis. Sit, ab esse? Incidunt esse corrupti aut
            reprehenderit, laudantium alias harum, in est possimus omnis vero
            exercitationem libero blanditiis laborum quos iure vel mollitia unde
            amet quia nam qui? Sint velit expedita commodi. Ea earum vero
            facilis ad quis voluptatum dolor, dignissimos velit culpa odio
            explicabo eius maxime, pariatur assumenda tempora temporibus esse id
            soluta nostrum ex. Ullam, culpa! Magni non distinctio tempore?
            Tenetur suscipit nisi dolorum tempora labore itaque, numquam porro
            laborum et excepturi obcaecati ea fugit vero aut sapiente odit ex,
            voluptate autem nulla officia exercitationem. Saepe rem impedit
            accusantium natus? Vero ipsum unde illo doloribus ad fuga facere
            suscipit! Debitis molestias officiis id ipsum nemo, quaerat rerum
            velit, numquam, harum doloremque non mollitia aspernatur sequi ea
            voluptate a odio corporis. Repellat totam fuga facilis officiis
            repellendus corrupti cumque vitae impedit error. Saepe atque totam
            earum cumque aliquid inventore praesentium. Recusandae accusamus
            eius nam dignissimos quasi harum consequatur provident fugit quam.
            Incidunt blanditiis cumque officiis voluptas ullam adipisci
            consectetur dolorum perspiciatis impedit velit quis alias,
            recusandae, optio nesciunt nisi ad asperiores nobis, quam vitae
            harum perferendis debitis illum ipsa voluptatem. Magnam! Beatae quos
            veniam eos quo ad quae nisi ipsum, vitae culpa omnis ut dicta nemo
            facilis rerum. Accusantium porro dolor ullam error libero quo quod
            inventore minus dolores atque. Vero! Doloribus quae, delectus
            nostrum vero quia quibusdam tempore veritatis impedit eum, est
            consequatur minus! Suscipit, excepturi beatae rerum quod odio
            tempore. Enim placeat mollitia aspernatur ex praesentium quis nemo
            quasi. Similique necessitatibus ipsam iure numquam sunt, ipsa
            accusamus quidem enim qui voluptate amet, quisquam ex. Voluptatem,
            facere. Maxime velit cupiditate neque nulla ducimus? Mollitia nihil
            unde aut dolores ea necessitatibus. Impedit, corporis rerum dolorum
            natus iste earum eaque vitae maxime dolor dolorem debitis adipisci
            voluptatibus quaerat blanditiis nihil, eum cumque praesentium aut
            molestiae porro. Soluta fuga mollitia quidem natus placeat. Maxime
            quasi sint dicta modi! Praesentium eum illo magni neque iure. Ad,
            nesciunt reprehenderit dolor rerum perferendis autem temporibus!
            Earum vitae optio unde eligendi ut esse distinctio hic perferendis
            facere. Iste tenetur inventore sit facilis voluptas at optio
            deserunt officiis incidunt harum ipsum cumque nam quae est,
            architecto tempora! Labore cum porro doloribus delectus similique
            corporis, minus asperiores numquam repellat? Veniam alias cumque
            temporibus doloribus quo ipsam repellat, dolore nihil quos iure
            accusantium, sint rerum quam deserunt enim placeat perferendis,
            nostrum fugiat. Cupiditate aliquid ab culpa minima iusto laudantium
            omnis. Assumenda rem nulla nesciunt cum? Eligendi iusto tempora
            nostrum ipsa tenetur numquam minus dolorem quas provident delectus!
            Est voluptatibus cumque, quisquam vitae sed officia, optio possimus
            numquam voluptates, laboriosam sint! Eius vitae aliquam sed cum
            debitis, assumenda animi dolore hic sequi distinctio rerum dolorum
            vero enim esse, optio magni. Nostrum fugiat quidem similique facere
            mollitia quo nulla reiciendis blanditiis. Modi! Expedita ipsam
            maiores possimus praesentium aliquam assumenda eligendi nostrum
            alias dignissimos repellendus optio earum suscipit animi officia
            iure amet officiis facilis consectetur ipsa, perferendis rerum
            quaerat soluta. Voluptatem, dolores? Dignissimos. Unde esse
            recusandae reiciendis aut, veritatis est ex, velit, iste pariatur
            distinctio similique quaerat eos exercitationem nulla. Tempore
            necessitatibus ad temporibus pariatur nesciunt beatae numquam
            aliquam, quo recusandae reiciendis inventore? Possimus consequatur,
            quas molestiae architecto, rerum id temporibus omnis, commodi
            perspiciatis veritatis provident dolore quidem? Quasi, cupiditate!
            Asperiores fugiat dolor praesentium eligendi aliquid, magni illo.
            Fugiat at iusto omnis ea. Numquam molestiae, a quibusdam sapiente in
            aliquid sint non voluptatum totam harum repudiandae, quaerat
            distinctio? Sit odit consectetur totam eligendi corporis dignissimos
            tempore modi veniam, repudiandae, minus voluptates facere
            necessitatibus. Et cumque mollitia aut porro, distinctio quae
            perferendis voluptatibus magnam aliquid error magni eius rerum
            sapiente amet nihil hic delectus maiores nam atque at odio. Repellat
            nobis atque eligendi perspiciatis. Dolorum culpa modi quia magni
            architecto quasi, cupiditate earum voluptates sequi saepe sit!
            Aliquam autem ex harum at illo obcaecati ullam recusandae dolorum
            ratione dignissimos, ipsum, repudiandae vero odit sunt! Iste, nihil
            reiciendis porro est, velit commodi beatae, architecto saepe
            accusamus necessitatibus sit maiores laborum facilis placeat ad!
            Alias exercitationem odio, numquam adipisci fugit deleniti saepe
            velit. Nostrum, impedit harum. Enim illo, eum sed consectetur porro
            ea accusantium, tempora nisi blanditiis quia beatae laudantium
            quaerat, ducimus et sint maxime facilis corrupti ipsam! Atque
            doloremque delectus ut! Ea placeat pariatur reiciendis. Recusandae
            omnis cum eos maxime vitae minus unde odio molestiae! Beatae
            repudiandae recusandae tempore, hic in maiores consequuntur! Natus
            illo quis rem velit quisquam unde ad quasi veritatis odio quae?
            Praesentium suscipit incidunt natus magni autem quasi, vel
            veritatis! Consequatur similique tenetur nisi doloribus dolore
            dolor, nulla iure necessitatibus? Modi iure ex accusamus similique
            quos a distinctio temporibus dolores accusantium. Facilis a sed
            quod. Ut, repellendus. Ex beatae, voluptate exercitationem atque
            illum reprehenderit vel sequi eveniet placeat possimus tenetur
            dignissimos fuga saepe distinctio accusamus optio nisi, commodi eum
            ab nam. Voluptas id iusto pariatur dolore et libero laboriosam iure
            quo ullam eligendi omnis nihil inventore corporis, nobis
            voluptatibus quasi porro non nulla explicabo vitae necessitatibus
            totam rem odit! Optio, ullam? Perspiciatis cupiditate corporis nisi,
            praesentium animi officiis illo repellendus. Doloribus explicabo non
            dignissimos quam earum eius cum reprehenderit quisquam! Numquam
            praesentium dolores, suscipit cupiditate doloremque accusantium
            rerum adipisci quidem repellendus! Soluta quam ut aperiam accusamus?
            Molestiae dolore sit voluptate, odio fuga voluptatem fugiat
            similique, blanditiis voluptates ipsam reiciendis vitae perspiciatis
            omnis recusandae reprehenderit velit amet qui fugit, magnam ipsa
            accusamus. Similique cupiditate earum sapiente, eaque nemo
            voluptates accusamus atque quisquam, accusantium corporis cum,
            tenetur vitae dolor voluptatibus! Earum, vitae atque. Ipsa quo
            doloremque ex beatae, dolorem dolore pariatur facere optio! Aliquam
            incidunt officiis ad odit rem amet fugiat autem itaque deserunt
            ipsam hic non, rerum nobis alias quidem vitae sit placeat neque
            quisquam vel veritatis! Nihil facere inventore praesentium at!
            Beatae neque veniam quos quis quo cumque perferendis optio quisquam
            eos nesciunt. Quidem sint vel ab unde labore porro aliquam facere
            nisi modi atque et culpa, natus at, voluptatibus obcaecati. Qui
            distinctio suscipit amet quasi, consequuntur enim deleniti vel,
            tempore earum corrupti esse officiis doloremque culpa assumenda
            totam rem delectus vitae dolores doloribus. Ducimus voluptate, ab
            ratione id consequuntur magni! Blanditiis quasi accusantium at
            tenetur fugiat sequi! Et sunt eaque eligendi maiores dolore,
            delectus impedit consectetur iste odit blanditiis rem voluptatem
            excepturi iusto saepe similique tempore! Non incidunt deserunt
            accusamus! Rerum at officia fuga iste explicabo voluptatum minima ut
            dignissimos non a impedit, quisquam quidem est laborum illum. Esse
            eius doloremque neque ipsam est corporis alias quis placeat eveniet
            delectus. Quos impedit cupiditate libero ducimus repudiandae
            nesciunt laborum animi incidunt eos tempore quisquam blanditiis
            autem, recusandae officia. Beatae, dolorem accusamus? Officia ipsa
            dolorem consectetur nemo impedit minus quibusdam officiis ducimus.
            Quasi exercitationem eos soluta ex. Itaque aliquid et quo.
            Temporibus ipsum magni animi eius quasi ea quos vitae ipsam, minus
            possimus dolores iusto eum voluptas quia incidunt odit at unde.
            Corrupti animi possimus cum expedita optio, distinctio numquam ipsum
            rerum esse. Sapiente ut inventore officiis id facere quisquam unde,
            repellendus ex omnis amet. Expedita repellat autem amet molestias
            vitae quibusdam. Iure magni blanditiis fuga quod dignissimos minima
            impedit voluptas quis, fugit ab aut laboriosam tempora explicabo
            veniam consectetur. Numquam fugiat inventore a ipsam maxime quo
            veritatis quidem explicabo, perferendis obcaecati? Nisi, soluta sit?
            Deserunt voluptatibus laboriosam eum corporis commodi maxime
            architecto quod optio vero ullam a recusandae eaque, alias dicta
            debitis omnis est perferendis ipsum mollitia repellendus eligendi,
            rem magnam.
          </p>
        </div>
      </main>
    </>
  );
};

export default App;
