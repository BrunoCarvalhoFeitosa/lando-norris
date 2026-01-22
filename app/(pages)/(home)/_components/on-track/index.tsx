"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { TrophieBrazil } from "@/app/components/common/vectors/trophies/trophie-brazil"
import { TrophieUnitedKingdom } from "@/app/components/common/vectors/trophies/trophie-united-kingdom"
import { TrophieMonaco } from "@/app/components/common/vectors/trophies/trophie-monaco"
import { TrophieAustralia } from "@/app/components/common/vectors/trophies/trophie-australia"
import { TrophieAbuDhabi } from "@/app/components/common/vectors/trophies/trophie-abu-dhabi"
import { TrophieSingapore } from "@/app/components/common/vectors/trophies/trophie-singapore"
import { TrophieMiami } from "@/app/components/common/vectors/trophies/trophie-miami"
gsap.registerPlugin(ScrollTrigger)

export const OnTrackSection = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".ontrack-title > *",
      {
        y: 80,
        autoAlpha: 0
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".ontrack-title",
          start: "top 100%",
          toggleActions: "restart none restart none"
        }
      }
    )

    gsap
      .utils
      .toArray<HTMLElement>(".ontrack-highlight")
      .forEach((highlight) => {
        gsap.set(highlight, {
          scaleX: 0,
          transformOrigin: "left center"
        })

        gsap.timeline({
          scrollTrigger: {
            trigger: highlight.parentElement,
            start: "top 70%",
            toggleActions: "restart none restart none"
          }
        }).to(highlight, {
          scaleX: 1,
          duration: 0.4,
          ease: "power3.out"
        }).to(highlight, {
          scaleX: 0,
          transformOrigin: "right center",
          duration: 0.4,
          ease: "power3.in",
          delay: 0.15
        })
      })
  }, [])

  return (
    <section className="2xl:pt-24 pb-10 md:pb-30 px-5 w-full bg-black">
      <div className="relative h-30 md:h-57.5 lg:h-77.5 xl:h-95 2xl:h-162.5 overflow-hidden">
        <h2 className="ontrack-title flex flex-col font-sans text-[6em] md:text-[12em] lg:text-[16em] xl:text-[21em] 2xl:text-[30em] uppercase leading-none text-white relative z-10">
          <strong className="font-bungee text-default opacity-0">
            On
          </strong>
          <span className="absolute top-7 md:top-10 lg:top-14 2xl:top-50 font-bold opacity-0">
            Track
          </span>
        </h2>
        <span className="ontrack-highlight absolute inset-0 block bg-default z-10" />
      </div>
      <div className="pt-10 2xl:px-30">
        <div className="relative">
          <h3 className="relative w-fit font-sans text-sm font-bold uppercase tracking-tighter text-white overflow-hidden">
            <span>Bringing the fight</span>
          </h3>
          <span className="ontrack-highlight absolute inset-0 block bg-default z-10" />
        </div>
        <div className="relative ontrack-paragraph">
          <p className="mt-6 font-sans text-2xl text-white lg:max-w-lg">
            Since his F1 debut with McLaren in 2019, Lando Norris has been all in –
            pushing limits, chasing wins, and bringing the
            <strong className="ml-1.5 font-brier font-normal text-default">
              fight to every race
            </strong>.
          </p>
          <span className="ontrack-highlight absolute inset-0 block bg-default z-10" />
        </div>
      </div>
      <div className="pt-20 2xl:px-30">
        <div>
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="scale-80 md:scale-100">
                <TrophieBrazil width="80" height="80" stroke="var(--color-default)" />
              </div>
              <h4 className="font-bungee text-2xl md:text-7xl font-bold uppercase tracking-tighter text-white">
                Brazil
              </h4>
            </div>
            <span className="ontrack-highlight absolute inset-0 block bg-default z-10" />
          </div>
          <div className="relative mt-3 pl-2 flex flex-col gap-5">
            <p className="font-sans md:text-xl text-white">
              <strong className="font-bungee text-default">On November 9, 2025,</strong> Lando Norris experienced one of the most memorable moments of his career by achieving a stunning victory at the Brazilian Grand Prix, held at the traditional Autódromo José Carlos Pace in Interlagos. Dominating virtually the entire weekend, the British McLaren driver started from pole position and maintained consistency from start to finish, leading the race with authority and extending his lead in the Formula 1 World Championship.
            </p>
            <p className="font-sans md:text-xl text-white">
              The race was full of excitement from the very first meters: an accident on the first lap involved Brazilian driver Gabriel Bortoleto, who ended up abandoning his Sauber, and the race had Safety Car and Virtual Safety Car periods in the initial laps. Even with these unpredictable circumstances, Norris maintained concentration and pace, always in control of the McLaren, which allowed him to open up a comfortable lead over his rivals.
            </p>
            <p className="font-sans md:text-xl text-white">
              Behind him, young Kimi Antonelli shone by securing second place, his best result in Formula 1 to date, while Max Verstappen staged a remarkable recovery after starting from the pits and still managed to finish on the podium in third.
            </p>
            <p className="font-sans md:text-xl text-white">
              The victory in Brazil was not just another triumph for Norris, but a crucial strategic step in the battle for the title: by crossing the finish line with about ten seconds of advantage, he extended his championship lead to 24 points over his teammate Oscar Piastri, with only a few stages remaining in the season.
            </p>
            <p className="font-sans md:text-xl text-white">
              Amid the euphoria of Brazilian fans and the vibrant atmosphere at Interlagos, Norris celebrated on the podium with his team, consolidating a near-perfect weekend and bringing himself even closer to the coveted Formula 1 world title.
            </p>
            <span className="ontrack-highlight absolute inset-0 block bg-default z-10" />
          </div>
          <div className="pt-8 pl-2 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-0 text-white">
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold uppercase tracking-tighter">
                When
              </span>
              <span className="font-sans text-4xl font-bold uppercase tracking-tighter">
                09 Nov 25
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold uppercase tracking-tighter">
                Finish
              </span>
              <span className="flex font-sans text-4xl font-bold uppercase tracking-tighter">
                1
                <span className="text-xs font-extrabold text-default">
                  st
                </span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold uppercase tracking-tighter">
                Time/Gap
              </span>
              <span className="font-sans text-4xl font-bold uppercase tracking-tighter">
                1:32:01.596
              </span>
            </div>
          </div>
        </div>
        <div className="pt-15 md:pt-30 2xl:pt-40">
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="scale-80 md:scale-100">
                <TrophieUnitedKingdom width="60" height="100" stroke="var(--color-default)" />
              </div>
              <h4 className="font-bungee text-2xl md:text-7xl font-bold uppercase tracking-tighter text-white">
                United Kingdom
              </h4>
            </div>
            <span className="ontrack-highlight absolute inset-0 block bg-default z-10" />
          </div>
          <div className="relative mt-3 pl-2 flex flex-col gap-5">
            <p className="font-sans md:text-xl text-white">
              <strong className="font-bungee text-default">On July 6, 2025,</strong> Lando Norris delivered one of the most memorable moments of his career by achieving a historic victory at the British Grand Prix, held at the legendary Silverstone Circuit. For the first time in his Formula 1 career, the British McLaren driver triumphed in front of the passionate local crowd, in a race full of drama, changing weather conditions, and strategic decisions that kept the audience in constant suspense.
            </p>
            <p className="font-sans md:text-xl text-white">
              The race was a true test of skill and patience: under typically English weather, the rain alternated between heavy downpours and periods of dry track, forcing teams and drivers to adapt quickly to the changing conditions. The race started with a lot of action — Max Verstappen started from pole, but soon faced difficulties on the wet track and ended up losing positions after a spin, opening the way for the McLaren duo to fight for the lead.
            </p>
            <p className="font-sans md:text-xl text-white">
              Oscar Piastri, his teammate and main rival for the title, led much of the race, but was penalized 10 seconds for slowing down improperly during a Safety Car restart. This penalty proved decisive: by serving the penalty during his pit stop, Piastri lost the lead, allowing Norris to take the top spot and build a solid advantage until the checkered flag. Norris' victory was celebrated with enormous enthusiasm by British fans — he became only the 13th home driver to win the British Grand Prix and the first since David Coulthard in 2000, breaking decades without a British triumph at Silverstone outside of the extraordinary era of Lewis Hamilton.
            </p>
            <p className="font-sans md:text-xl text-white">
              Furthermore, the race delivered other remarkable stories: Nico Hülkenberg, driving for Sauber, achieved an unprecedented podium finish in his 239th F1 race, climbing to third place after an impressive recovery. Meanwhile, Hamilton finished fourth, and Verstappen, significantly hampered by setbacks, crossed the finish line in fifth. This victory not only enhanced Norris's career — who had long been demanding a home win — but also brought the fight for the world title even closer, reducing Piastri's lead in the championship to just eight points halfway through the season.
            </p>
            <span className="ontrack-highlight absolute inset-0 block bg-default z-10" />
          </div>
          <div className="pt-8 pl-2 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-0 text-white">
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold uppercase tracking-tighter">
                When
              </span>
              <span className="font-sans text-4xl font-bold uppercase tracking-tighter">
                06 Jul 25
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold uppercase tracking-tighter">
                Finish
              </span>
              <span className="flex font-sans text-4xl font-bold uppercase tracking-tighter">
                1
                <span className="text-xs font-extrabold text-default">
                  st
                </span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold uppercase tracking-tighter">
                Time/Gap
              </span>
              <span className="font-sans text-4xl font-bold uppercase tracking-tighter">
                1:37:15.735
              </span>
            </div>
          </div>
        </div>
        <div className="pt-15 md:pt-30 2xl:pt-40">
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="scale-80 md:scale-100">
                <TrophieMonaco width="60" height="100" stroke="var(--color-default)" />
              </div>
              <h4 className="font-bungee text-2xl md:text-7xl font-bold uppercase tracking-tighter text-white">
                Monaco
              </h4>
            </div>
            <span className="ontrack-highlight absolute inset-0 block bg-default z-10" />
          </div>
          <div className="relative mt-3 pl-2 flex flex-col gap-5">
            <p className="font-sans md:text-xl text-white">
              <strong className="font-bungee text-default">On May 25, 2025,</strong> Lando Norris achieved a special feat by winning the Monaco Grand Prix, one of the most iconic and challenging races in Formula 1. On the narrow streets of the Principality, where mistakes are unforgivable and track position is crucial, the British McLaren driver showed absolute precision, strategic maturity, and composure to secure a victory that further elevated his status in the season.
            </p>
            <p className="font-sans md:text-xl text-white">
              The weekend already hinted at a strong performance, and the race confirmed expectations. In Monaco, every lap demands maximum concentration, and Norris intelligently managed his pace, tires, and traffic, keeping his rivals under control at all times. Even with constant pressure and proximity to the walls, he avoided unnecessary risks and seized every opportunity to consolidate his lead.
            </p>
            <p className="font-sans md:text-xl text-white">
              The race was marked by refined strategies and tense moments during pit stops, a crucial element on a circuit where overtaking is rare. McLaren executed an impeccable job, allowing Norris to return to the track in key positions and maintain the lead until the checkered flag, resisting pressure from his rivals in the decisive laps.
            </p>
            <p className="font-sans md:text-xl text-white">
              Crossing the finish line first in Monaco had enormous symbolic weight for Norris. The victory represented not only important championship points, but also the consecration of his evolution as a complete driver, capable of winning both on high-speed circuits and on technical and unforgiving tracks like Monte Carlo. Amid the glamour of the Principality and the applause of the paddock, Lando Norris wrote another remarkable chapter in his Formula 1 career in 2025.
            </p>
            <span className="ontrack-highlight absolute inset-0 block bg-default z-10" />
          </div>
          <div className="pt-8 pl-2 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-0 text-white">
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold uppercase tracking-tighter">
                When
              </span>
              <span className="font-sans text-4xl font-bold uppercase tracking-tighter">
                05 May 25
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold uppercase tracking-tighter">
                Finish
              </span>
              <span className="flex font-sans text-4xl font-bold uppercase tracking-tighter">
                1
                <span className="text-xs font-extrabold text-default">
                  st
                </span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold uppercase tracking-tighter">
                Time/Gap
              </span>
              <span className="font-sans text-4xl font-bold uppercase tracking-tighter">
                1:40:33.843
              </span>
            </div>
          </div>
        </div>
        <div className="pt-15 md:pt-30 2xl:pt-40">
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="scale-80 md:scale-100">
                <TrophieAustralia width="80" height="80" stroke="var(--color-default)" />
              </div>
              <h4 className="font-bungee text-2xl md:text-7xl font-bold uppercase tracking-tighter text-white">
                Australia
              </h4>
            </div>
            <span className="ontrack-highlight absolute inset-0 block bg-default z-10" />
          </div>
          <div className="relative mt-3 pl-2 flex flex-col gap-5">
            <p className="font-sans md:text-xl text-white">
              <strong className="font-bungee text-default">On March 16, 2025,</strong> Lando Norris brilliantly kicked off the Formula 1 season by winning the Australian Grand Prix, held at the Albert Park circuit in Melbourne. In a race that marked the start of the championship, the British McLaren driver showed early on that he was ready to fight for big goals, combining speed, control, and strategic maturity.
            </p>
            <p className="font-sans md:text-xl text-white">
              Starting well and maintaining a strong pace in the early laps, Norris quickly established himself among the leading contenders in the race. The demanding and treacherous Australian track required precision in every corner, and the Briton responded with consistent laps, avoiding mistakes and managing tire wear well. Even with constant pressure from his rivals, he maintained his lead with authority.
            </p>
            <p className="font-sans md:text-xl text-white">
              The race was marked by tense moments, including Safety Car periods that scrambled strategies. In these situations, Norris stood out for his composure during restarts and efficient communication with the team. McLaren executed precise pit stops, allowing the driver to return to the track in strategic positions and maintain control of the race until the end.
            </p>
            <p className="font-sans md:text-xl text-white">
              By taking the checkered flag in first place, Norris celebrated a symbolic and fundamental victory. Besides opening the season with maximum points, the triumph in Melbourne represented a strong sign that 2025 could be a special year in his career. With a solid performance and high confidence, Lando Norris left Australia as the moral leader of the championship and with renewed respect from the entire paddock.
            </p>
            <span className="ontrack-highlight absolute inset-0 block bg-default z-10" />
          </div>
          <div className="pt-8 pl-2 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-0 text-white">
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold uppercase tracking-tighter">
                When
              </span>
              <span className="font-sans text-4xl font-bold uppercase tracking-tighter">
                16 Mar 25
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold uppercase tracking-tighter">
                Finish
              </span>
              <span className="flex font-sans text-4xl font-bold uppercase tracking-tighter">
                1
                <span className="text-xs font-extrabold text-default">
                  st
                </span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold uppercase tracking-tighter">
                Time/Gap
              </span>
              <span className="font-sans text-4xl font-bold uppercase tracking-tighter">
                1:42:06.304
              </span>
            </div>
          </div>
        </div>
        <div className="pt-15 md:pt-30 2xl:pt-40">
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="scale-80 md:scale-100">
                <TrophieAbuDhabi width="60" height="100" stroke="var(--color-default)" />
              </div>
              <h4 className="font-bungee text-2xl md:text-7xl font-bold uppercase tracking-tighter text-white">
                Abu Dhabi
              </h4>
            </div>
            <span className="ontrack-highlight absolute inset-0 block bg-default z-10" />
          </div>
          <div className="relative mt-3 pl-2 flex flex-col gap-5">
            <p className="font-sans md:text-xl text-white">
              <strong className="font-bungee text-default">On December 8, 2024,</strong> Lando Norris brought the Formula 1 season to a memorable close by winning the Abu Dhabi Grand Prix, held at the modern Yas Marina circuit. Under the desert lights and in a decisive atmosphere, the British McLaren driver delivered a confident and mature performance, crowning a year of great personal and technical development.
            </p>
            <p className="font-sans md:text-xl text-white">
              From the start, Norris showed complete control of the situation, maintaining a consistent pace and managing the most critical phases of the race well. On a circuit where strategy and tire management are often decisive, he knew how to balance aggressiveness and caution, taking advantage of every strategic window to stay ahead of his main rivals.
            </p>
            <p className="font-sans md:text-xl text-white">
              The race had tense moments, especially during pit stops and restarts after isolated incidents, but Norris remained unfazed. McLaren did a precise job, ensuring the driver always returned to a favorable position on the track. In the final laps, even under pressure, he maintained clean and consistent lap times, leaving no room for decisive attacks.
            </p>
            <p className="font-sans md:text-xl text-white">
              Crossing the finish line first in Abu Dhabi had a special meaning. Besides closing the season with a victory, the result symbolized Norris's consolidation as a driver capable of winning important races and deciding championships. Under the fireworks that traditionally end the Formula 1 year, Lando Norris celebrated a triumph that served as a starting point for even greater ambitions in the following seasons.
            </p>
            <span className="ontrack-highlight absolute inset-0 block bg-default z-10" />
          </div>
          <div className="pt-8 pl-2 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-0 text-white">
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold uppercase tracking-tighter">
                When
              </span>
              <span className="font-sans text-4xl font-bold uppercase tracking-tighter">
                08 Dec 24
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold uppercase tracking-tighter">
                Finish
              </span>
              <span className="flex font-sans text-4xl font-bold uppercase tracking-tighter">
                1
                <span className="text-xs font-extrabold text-default">
                  st
                </span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold uppercase tracking-tighter">
                Time/Gap
              </span>
              <span className="font-sans text-4xl font-bold uppercase tracking-tighter">
                1:26:33.291
              </span>
            </div>
          </div>
        </div>
        <div className="pt-15 md:pt-30 2xl:pt-40">
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="scale-80 md:scale-100">
                <TrophieSingapore width="60" height="100" stroke="var(--color-default)" />
              </div>
              <h4 className="font-bungee text-2xl md:text-7xl font-bold uppercase tracking-tighter text-white">
                Singapore
              </h4>
            </div>
            <span className="ontrack-highlight absolute inset-0 block bg-default z-10" />
          </div>
          <div className="relative mt-3 pl-2 flex flex-col gap-5">
            <p className="font-sans md:text-xl text-white">
              <strong className="font-bungee text-default">On September 22, 2024,</strong> Lando Norris achieved a memorable victory at the Singapore Grand Prix, held on the brightly lit and challenging streets of the Marina Bay Street Circuit. In a race marked by heat, high humidity, and extreme physical demands, the British McLaren driver demonstrated skill, stamina, and an impeccable strategy that led him to the top of the podium.
            </p>
            <p className="font-sans md:text-xl text-white">
              From the start, Norris maintained a strong pace, controlling the race even with the heavy traffic typical of a street circuit. The Singapore track, with its tight corners, short straights and little margin for error, demanded total concentration, and the Briton drove with precision, avoiding incidents that hampered other drivers throughout the 61 laps of the race.
            </p>
            <p className="font-sans md:text-xl text-white">
              The race was also marked by decisive pit stop strategies and Safety Car interventions, common in Singapore due to track conditions and accidents. McLaren showed tactical efficiency, ensuring quick and calculated pit stops that allowed Norris to maintain the lead and control the pace of the race. Even with pressure from rivals in the second half of the race, he managed to remain calm and consolidate his position at the front of the pack.
            </p>
            <p className="font-sans md:text-xl text-white">
              Upon crossing the finish line, Norris celebrated a victory that not only earned him important championship points but also reinforced his reputation as a complete driver, capable of dominating races on technical and challenging circuits. Under the lights of Marina Bay, Lando Norris's victory in Singapore stood out as one of the most impressive moments of the 2024 season.
            </p>
            <span className="ontrack-highlight absolute inset-0 block bg-default z-10" />
          </div>
          <div className="pt-8 pl-2 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-0 text-white">
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold uppercase tracking-tighter">
                When
              </span>
              <span className="font-sans text-4xl font-bold uppercase tracking-tighter">
                22 Sep 24
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold uppercase tracking-tighter">
                Finish
              </span>
              <span className="flex font-sans text-4xl font-bold uppercase tracking-tighter">
                1
                <span className="text-xs font-extrabold text-default">
                  st
                </span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold uppercase tracking-tighter">
                Time/Gap
              </span>
              <span className="font-sans text-4xl font-bold uppercase tracking-tighter">
                1:40:52.571
              </span>
            </div>
          </div>
        </div>
        <div className="pt-15 md:pt-30 2xl:pt-40">
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="scale-80 md:scale-100">
                <TrophieMiami width="60" height="100" stroke="var(--color-default)" />
              </div>
              <h4 className="font-bungee text-2xl md:text-7xl font-bold uppercase tracking-tighter text-white">
                Miami
              </h4>
            </div>
            <span className="ontrack-highlight absolute inset-0 block bg-default z-10" />
          </div>
          <div className="relative mt-3 pl-2 flex flex-col gap-5">
            <p className="font-sans md:text-xl text-white">
              <strong className="font-bungee text-default">On May 5, 2024,</strong> Lando Norris achieved a thrilling victory at the Miami Grand Prix, held at the modern Miami International Autodrome. In a weekend that combined hot weather, a large crowd, and high expectations, the British McLaren driver displayed speed, strategic intelligence, and absolute control of the race, securing another remarkable triumph in his career.
            </p>
            <p className="font-sans md:text-xl text-white">
              From the start, Norris stood out for his precise acceleration, staying among the leaders and quickly establishing himself in a prominent position. The Miami circuit, with its low and medium-speed corners and long straights, demanded not only car performance but also tire management and physical endurance, something the Briton knew how to balance masterfully.
            </p>
            <p className="font-sans md:text-xl text-white">
              The race had its tense moments, including the use of the Safety Car and changes in team strategies, but Norris and McLaren reacted efficiently, ensuring quick and calculated pit stops that allowed him to maintain the lead. Even under pressure from close rivals, he maintained a consistent pace, making no mistakes and taking advantage of every opportunity to increase his advantage.
            </p>
            <p className="font-sans md:text-xl text-white">
              By crossing the finish line in first place, Lando Norris celebrated a triumph that reinforced his consistency throughout the season and his potential as a title contender. The victory in Miami stood out not only for the result, but for the demonstration of control, race intelligence and technical skill, further solidifying his reputation as one of the great names in Formula 1 in 2024.
            </p>
            <span className="ontrack-highlight absolute inset-0 block bg-default z-10" />
          </div>
          <div className="pt-8 pl-2 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-0 text-white">
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold uppercase tracking-tighter">
                When
              </span>
              <span className="font-sans text-4xl font-bold uppercase tracking-tighter">
                05 May 24
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold uppercase tracking-tighter">
                Finish
              </span>
              <span className="flex font-sans text-4xl font-bold uppercase tracking-tighter">
                1
                <span className="text-xs font-extrabold text-default">
                  st
                </span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold uppercase tracking-tighter">
                Time/Gap
              </span>
              <span className="font-sans text-4xl font-bold uppercase tracking-tighter">
                1:30:49.876
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}