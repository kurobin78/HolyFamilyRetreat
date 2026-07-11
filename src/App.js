import React, { useState } from 'react';
import { 
  Calendar, Clock, MapPin, Users, Sun, Moon, Bus, 
  Utensils, Music, Heart, Info, Sparkles, Tent, 
  Droplets, ChevronRight, Camera, BookOpen, Navigation
} from 'lucide-react';

const scheduleData = {
  day1: [
    { time: "08:00 - 09:20", title: "선발대 출발 및 준비", location: "목동성전 → YBM", type: "move", desc: "잔여 물품 운반 및 수련회 장소 세팅", manager: "김인수 목사, 나상국 전도사" },
    { time: "09:20 - 12:00", title: "집합 및 출발", location: "목동성전", type: "move", desc: "인원 확인, 출발 기도 후 전세버스 탑승", manager: "강진영 전도사 등" },
    { time: "12:00 - 13:30", title: "도착 및 점심식사", location: "YBM 지하1층 식당", type: "meal", desc: "명찰/티셔츠 배부, 식당으로 질서 있게 이동 후 식사", manager: "접수 담당자" },
    { time: "13:30 - 14:00", title: "개회예배 및 OT", location: "3층 대강의실", type: "worship", desc: "일정 설명 및 특별사항 전달", manager: "정성수 목사" },
    { time: "14:00 - 17:30", title: "물놀이 및 수목원 방문", location: "족구장/수목원", type: "activity", desc: "온 가족 물놀이(에어바운스) 또는 물향기 수목원 방문", manager: "김인수 목사 등" },
    { time: "17:30 - 18:00", title: "샤워 및 숙소 정리", location: "각 숙소", type: "rest", desc: "16:00부터 방 체크인. 미배정자 지정 호실 안내", manager: "강진영 전도사" },
    { time: "18:00 - 19:00", title: "저녁식사", location: "지하 1층 식당", type: "meal", desc: "개별 식사 진행", manager: "-" },
    { time: "19:00 - 19:30", title: "가족 및 단체 사진촬영", location: "3층 대강의실 포토존", type: "camera", desc: "포토존에서 가족/단체 사진 촬영", manager: "김윤영 권사" },
    { time: "19:30 - 21:30", title: "거룩한 家 저녁 집회", location: "3층 대강의실", type: "worship", desc: "찬양, 기도, 말씀선포, 가정 언약식", manager: "이학성 담임목사" },
    { time: "21:30 - 22:00", title: "친교의 시간 (야식)", location: "대강의실/로비", type: "meal", desc: "부서/가족별 야식 제공 및 교제", manager: "청장년부" },
    { time: "22:00 - ", title: "취침", location: "개별숙소", type: "rest", desc: "어린이 12시 이전 취침 권장", manager: "각 교역자" }
  ],
  day2: [
    { time: "07:00 - 08:00", title: "기상 및 아침식사", location: "지하1층 식당", type: "meal", desc: "선착순 라면 제공 (07:30까지)", manager: "-" },
    { time: "08:00 - 08:40", title: "가정별/그룹별 QT", location: "개별숙소", type: "worship", desc: "말씀 카드 묵상 (저수지 산책 가능)", manager: "각 부장/속장" },
    { time: "08:40 - 09:30", title: "숙소 및 개별 짐정리", location: "개별숙소 → 3층", type: "rest", desc: "체크아웃 09:00. 짐 챙겨서 대강의실로", manager: "개별" },
    { time: "09:30 - 11:30", title: "부서별 프로그램", location: "지정 장소", type: "activity", desc: "각 부서별 맞춤형 특별 프로그램 진행", manager: "부서 담당자" },
    { time: "11:30 - 12:00", title: "폐회예배", location: "3층 대강의실", type: "worship", desc: "수련회 마무리 은혜의 시간", manager: "정성수 목사" },
    { time: "12:00 - 13:30", title: "점심식사", location: "지하1층 식당", type: "meal", desc: "뒷정리 인원 먼저 식사 후 자유 시간", manager: "-" },
    { time: "13:30 - 14:00", title: "뒷정리", location: "대강의실 등", type: "move", desc: "악기, 비품 정리 및 차량 적재", manager: "남성 및 담당자" },
    { time: "14:00 - 16:00", title: "교회로 출발", location: "목동성전으로", type: "move", desc: "안전하게 버스/승합차 탑승 후 귀가", manager: "김인수 목사 등" }
  ]
};

const programsData = [
  { group: "청장년/장년부", location: "대강의실", title: "크라운 재정 강의 & 나눔", leader: "윤근수 장로", color: "from-rose-400 to-pink-500", shadow: "shadow-pink-200" },
  { group: "청년부", location: "카페 및 로비", title: "신앙과 미래 생산적 토크", leader: "이소연 청년", color: "from-purple-400 to-fuchsia-500", shadow: "shadow-fuchsia-200" },
  { group: "중고등부", location: "소강의실 7", title: "출애굽기 리얼 스토리", leader: "나상국 전도사", color: "from-amber-400 to-orange-500", shadow: "shadow-orange-200" },
  { group: "어린이부", location: "소강의실 6", title: "놀라운 성막 이야기", leader: "강진영 전도사", color: "from-emerald-400 to-teal-500", shadow: "shadow-teal-200" }
];

const getTypeStyles = (type) => {
  switch (type) {
    case 'move': return { 
      color: 'text-rose-600', bg: 'bg-rose-100', border: 'border-rose-200',
      icon: Bus, gradient: 'from-rose-50 to-white', line: 'bg-rose-400'
    };
    case 'meal': return { 
      color: 'text-amber-600', bg: 'bg-amber-100', border: 'border-amber-200',
      icon: Utensils, gradient: 'from-amber-50 to-white', line: 'bg-amber-400'
    };
    case 'worship': return { 
      color: 'text-fuchsia-600', bg: 'bg-fuchsia-100', border: 'border-fuchsia-200',
      icon: Heart, gradient: 'from-fuchsia-50 to-white', line: 'bg-fuchsia-400'
    };
    case 'activity': return { 
      color: 'text-emerald-600', bg: 'bg-emerald-100', border: 'border-emerald-200',
      icon: StarIcon, gradient: 'from-emerald-50 to-white', line: 'bg-emerald-400'
    };
    case 'camera': return { 
      color: 'text-pink-600', bg: 'bg-pink-100', border: 'border-pink-200',
      icon: Camera, gradient: 'from-pink-50 to-white', line: 'bg-pink-400'
    };
    case 'rest': return { 
      color: 'text-slate-500', bg: 'bg-slate-100', border: 'border-slate-200',
      icon: Moon, gradient: 'from-slate-50 to-white', line: 'bg-slate-400'
    };
    default: return { 
      color: 'text-gray-500', bg: 'bg-gray-100', border: 'border-gray-200',
      icon: Clock, gradient: 'from-gray-50 to-white', line: 'bg-gray-400'
    };
  }
};

const StarIcon = ({className}) => <Sparkles className={className} />;

export default function App() {
  const [activeTab, setActiveTab] = useState('day1');

  return (
    <div className="min-h-screen bg-[#FFF5F7] font-sans selection:bg-pink-300 selection:text-pink-900 pb-20">
      {/* 1. HERO SECTION : 화사한 피치/코랄 톤 비주얼 */}
      <header className="relative w-full h-[400px] lg:h-[350px] overflow-hidden bg-rose-50/50 pb-8 pt-16">
        
        {/* 따뜻한 노을빛 피치 & 코랄 그라데이션 배경 */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-200/50 via-rose-100/50 to-[#FFF5F7]"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjUwLDIwNCwyMTUsMC4yKSIvPjwvc3ZnPg==')]"></div>

        {/* 세움교회 CI (좌측 상단 고정) */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20">
          <img 
            src="image_7f3404.png" 
            alt="세움교회 CI" 
            className="h-[70px] sm:h-[80px] md:h-[100px] w-auto object-contain drop-shadow-md" 
          />
        </div>

        {/* Hero Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
          <div className="animate-fade-in-up flex flex-col items-center mt-8 md:mt-2">
            
            {/* 메인 타이틀 이미지 영역 */}
            <div className="flex justify-center mb-8 relative">
                {/* 배경을 투명하게 만드는 애니메이션 컨테이너 */}
                <div className="relative flex items-center justify-center mix-blend-multiply transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="image_8171fd.png" 
                    alt="거룩한 家 온가족 수련회" 
                    className="h-[180px] sm:h-[220px] md:h-[250px] w-auto object-contain" 
                  />
                </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. BENTO WIDGETS (헤더 배경 밖) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mb-12 bg-[#FFF5F7]">
        
        {/* 상단 정보 카드 */}
        <div className="flex justify-center mb-8">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 p-4 rounded-3xl bg-white/60 backdrop-blur-md border border-rose-100 shadow-sm">
                <div className="flex items-center gap-3 text-rose-900 px-4">
                <div className="p-2 bg-rose-100 rounded-xl"><Calendar className="w-5 h-5 text-rose-500" /></div>
                <div className="text-left">
                    <div className="text-xs text-rose-400 font-medium">일정</div>
                    <div className="font-bold text-sm sm:text-base">7. 17(금) - 7. 18(토)</div>
                </div>
                </div>
                <div className="hidden sm:block w-px bg-rose-200"></div>
                <div className="flex items-center gap-3 text-rose-900 px-4">
                <div className="p-2 bg-rose-100 rounded-xl"><Navigation className="w-5 h-5 text-rose-500" /></div>
                <div className="text-left">
                    <div className="text-xs text-rose-400 font-medium">장소</div>
                    <div className="font-bold text-sm sm:text-base">YBM 연수원</div>
                </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Widget 1: 핵심 공지 (Red/Rose Theme) */}
          <div className="bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-pink-50 hover:shadow-[0_20px_50px_rgba(225,29,72,0.08)] transition-all duration-300 group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-rose-50 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out z-0"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-extrabold text-lg text-slate-800 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center"><Info className="w-4 h-4"/></span>
                  필독 공지사항
                </h3>
              </div>
              <ul className="space-y-3 text-sm font-medium text-slate-600">
                <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(251,113,133,0.8)]"></div><span><strong className="text-slate-800">숙소 키:</strong> 첫날 16:00 분배</span></li>
                <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(251,113,133,0.8)]"></div><span><strong className="text-slate-800">미배정자:</strong> 남 315호 / 여 215호</span></li>
                <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(251,113,133,0.8)]"></div><span><strong className="text-slate-800">체크아웃:</strong> 둘째 날 09:00</span></li>
              </ul>
            </div>
          </div>

          {/* Widget 2: 차량 안내 (Purple/Fuchsia Theme) */}
          <div className="bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-pink-50 hover:shadow-[0_20px_50px_rgba(192,38,211,0.08)] transition-all duration-300 group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-fuchsia-50 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out z-0"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-extrabold text-lg text-slate-800 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center"><Bus className="w-4 h-4"/></span>
                  차량 탑승
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-pink-50/50 border border-pink-100/50">
                  <div className="w-10 h-10 rounded-xl bg-fuchsia-500 text-white font-black flex items-center justify-center shadow-md shadow-fuchsia-200">1</div>
                  <div><p className="text-sm font-bold text-slate-800">1호차 (전세버스)</p><p className="text-xs text-slate-500 font-medium">어린이부 및 학부모</p></div>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-pink-50/50 border border-pink-100/50">
                  <div className="w-10 h-10 rounded-xl bg-purple-500 text-white font-black flex items-center justify-center shadow-md shadow-purple-200">2</div>
                  <div><p className="text-sm font-bold text-slate-800">2호차 (전세버스)</p><p className="text-xs text-slate-500 font-medium">중고등부 및 학부모</p></div>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-pink-50/50 border border-pink-100/50">
                  <div className="w-10 h-10 rounded-xl bg-pink-500 text-white font-black flex items-center justify-center shadow-md shadow-pink-200">바</div>
                  <div><p className="text-sm font-bold text-slate-800">바울버스</p><p className="text-xs text-slate-500 font-medium">장년층</p></div>
                </div>
              </div>
            </div>
          </div>

          {/* Widget 3: 부서별 프로그램 하이라이트 (Multi Theme) */}
          <div className="bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-pink-50 hover:shadow-[0_20px_50px_rgba(244,114,182,0.1)] transition-all duration-300">
            <h3 className="font-extrabold text-lg text-slate-800 flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center"><Users className="w-4 h-4"/></span>
              부서별 특별 프로그램
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {programsData.map((prog, idx) => (
                <div key={idx} className={`p-3 rounded-2xl bg-gradient-to-br ${prog.color} text-white shadow-lg ${prog.shadow} hover:-translate-y-1 transition-transform cursor-default relative overflow-hidden`}>
                  <div className="absolute -right-2 -bottom-2 opacity-20"><BookOpen className="w-12 h-12"/></div>
                  <div className="relative z-10">
                    <p className="text-[10px] font-bold bg-white/20 inline-block px-1.5 py-0.5 rounded backdrop-blur-sm mb-1">{prog.group}</p>
                    <p className="text-sm font-bold leading-tight line-clamp-2">{prog.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 3. MAIN TIMELINE */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* [변경 적용] 중앙 정렬된 예쁜 그라데이션 형태의 사진 올리기 버튼 */}
        <div className="flex justify-center mb-8">
          <a
            href="https://seumkmc.quickconnect.to/mo/request/9jCley9S1"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-center
              justify-center
              gap-3
              px-8
              py-4
              rounded-2xl
              bg-gradient-to-br
              from-rose-400
              via-pink-500
              to-fuchsia-500
              text-white
              shadow-lg
              shadow-pink-200/60
              hover:scale-[1.03]
              hover:-translate-y-0.5
              active:scale-[0.98]
              transition-all
              duration-300
              w-full
              sm:w-auto
              min-w-[240px]
            "
          >
            <Camera className="w-5 h-5 animate-pulse" />
            <div className="text-left">
              <p className="text-base font-extrabold tracking-tight leading-none">사진 올리기</p>
              <p className="text-[11px] text-white/80 mt-1 leading-none">우리들의 추억을 함께 공유해요</p>
            </div>
          </a>
        </div>

        {/* [변경 적용] 하단 타임라인 테이블 카드와 정확히 너비를 같이 맞춘 날짜 탭 바 */}
        <div className="mb-8">
          <div className="flex p-1.5 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-50 relative w-full">
            <button
              onClick={() => setActiveTab('day1')}
              className={`flex-1 py-4 text-center font-bold text-[15px] rounded-xl transition-all duration-300 z-10 flex items-center justify-center gap-2 ${
                activeTab === 'day1' ? 'text-rose-700 bg-rose-50 shadow-sm' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              첫째 날 <span className="text-xs font-semibold opacity-60">7/17 (금)</span>
            </button>
            <button
              onClick={() => setActiveTab('day2')}
              className={`flex-1 py-4 text-center font-bold text-[15px] rounded-xl transition-all duration-300 z-10 flex items-center justify-center gap-2 ${
                activeTab === 'day2' ? 'text-rose-700 bg-rose-50 shadow-sm' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              둘째 날 <span className="text-xs font-semibold opacity-60">7/18 (토)</span>
            </button>
          </div>
        </div>

        {/* Timeline List */}
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 shadow-[0_20px_50px_rgba(244,114,182,0.05)] border border-pink-50">
          <div className="relative border-l-[3px] border-pink-50 ml-4 sm:ml-6 space-y-8 sm:space-y-12">
            
            {scheduleData[activeTab].map((item, index) => {
              const styles = getTypeStyles(item.type);
              const Icon = styles.icon;
              
              return (
                <div key={index} className="relative pl-8 sm:pl-12 group">
                  {/* Glowing Timeline Node */}
                  <div className={`absolute -left-[19px] sm:-left-[19px] top-1 w-9 h-9 rounded-full flex items-center justify-center border-[3px] border-white ${styles.bg} ${styles.color} shadow-sm group-hover:scale-125 transition-transform duration-300 z-10`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  
                  {/* Premium Card Design */}
                  <div className={`relative bg-white rounded-3xl p-5 sm:p-6 border border-pink-50/50 shadow-sm hover:shadow-xl hover:shadow-pink-100/50 transition-all duration-300 group-hover:-translate-y-1 overflow-hidden`}>
                    
                    {/* Left Accent Line */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${styles.line}`}></div>
                    
                    {/* Background Icon Watermark */}
                    <div className={`absolute -right-4 -bottom-4 opacity-[0.03] transform group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-32 h-32" />
                    </div>

                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
                          {item.title}
                        </h3>
                        <span className={`inline-flex font-bold items-center px-3 py-1.5 rounded-xl text-sm bg-slate-50 border border-slate-100 text-slate-600 whitespace-nowrap shadow-sm`}>
                          <Clock className="w-4 h-4 mr-1.5 text-slate-400" />
                          {item.time}
                        </span>
                      </div>
                      
                      <p className="text-slate-600 mb-5 leading-relaxed font-medium text-[15px] sm:text-base">
                        {item.desc}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 text-sm font-semibold">
                        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${styles.bg} ${styles.color}`}>
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                        {item.manager && item.manager !== "-" && (
                          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 text-slate-500 border border-slate-100">
                            <Users className="w-4 h-4 text-slate-400" />
                            인도/담당: {item.manager}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* End of Timeline Indicator */}
            <div className="relative pl-8 sm:pl-12 pt-4">
              <div className="absolute -left-[11px] sm:-left-[11px] top-6 w-5 h-5 rounded-full border-[3px] border-white bg-pink-100 shadow-sm z-10"></div>
              <div className="text-center bg-pink-50/50 rounded-2xl py-4 border border-pink-100 text-pink-400 font-bold text-sm">
                {activeTab === 'day1' ? '첫째 날 일정이 모두 끝났습니다. 평안한 밤 되세요 🌙' : '모든 수련회 일정이 은혜 가운데 마쳤습니다 🙏'}
              </div>
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}
