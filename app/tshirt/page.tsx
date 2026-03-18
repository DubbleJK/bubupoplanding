import ServicePageLayout from '@/components/service-detail/ServicePageLayout';
import type { FeatureSectionItem } from '@/components/landing/FeatureSection';

const thCell =
  'border-b border-gray-200 bg-gray-50 px-2 py-2 text-left text-xs font-bold text-gray-900 sm:px-3 sm:text-sm';
const tdLabel =
  'whitespace-nowrap border-b border-gray-100 bg-gray-50/80 px-2 py-1.5 text-xs font-medium text-gray-800 sm:px-3 sm:text-sm';
const tdVal =
  'border-b border-gray-100 px-2 py-1.5 text-center text-xs text-gray-700 sm:px-3 sm:text-sm';

function FaqWideSizeTable({
  caption,
  colHeaders,
  rows,
}: {
  caption: string;
  colHeaders: string[];
  rows: { label: string; values: string[] }[];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full min-w-[320px] border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            <th className={thCell}>항목</th>
            {colHeaders.map((h) => (
              <th key={h} className={`${thCell} text-center`}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <td className={tdLabel}>{row.label}</td>
              {row.values.map((v, i) => (
                <td key={i} className={tdVal}>
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FaqVestLd25Table({ caption }: { caption: string }) {
  const vestRows = [
    ['XS', '80', '56', '35', '98', '92'],
    ['S', '85', '58.5', '37', '103', '97'],
    ['M', '90', '61', '39', '108', '102'],
    ['L', '95', '63.5', '41', '113', '107'],
    ['XL', '100', '66', '44', '118', '112'],
    ['2XL', '105', '68.5', '45', '123', '117'],
    ['3XL', '110', '71', '47', '128', '122'],
    ['4XL', '115', '73.5', '49.5', '133', '127'],
  ] as const;
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full min-w-[360px] border-collapse text-left text-xs sm:text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="bg-gray-50">
            <th className={thCell}>사이즈(LD25)</th>
            <th className={`${thCell} text-center`}>호수</th>
            <th className={`${thCell} text-center`}>등기장</th>
            <th className={`${thCell} text-center`}>어깨너비</th>
            <th className={`${thCell} text-center`}>가슴둘레</th>
            <th className={`${thCell} text-center`}>밑단둘레</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {vestRows.map(([size, num, back, shoulder, chest, hem]) => (
            <tr key={size} className="border-b border-gray-100 last:border-0">
              <td className="px-2 py-1.5 font-medium sm:px-3">{size}</td>
              <td className="px-2 py-1.5 text-center sm:px-3">{num}</td>
              <td className="px-2 py-1.5 text-center sm:px-3">{back}</td>
              <td className="px-2 py-1.5 text-center sm:px-3">{shoulder}</td>
              <td className="px-2 py-1.5 text-center sm:px-3">{chest}</td>
              <td className="px-2 py-1.5 text-center sm:px-3">{hem}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-gray-100 px-3 py-2 text-xs text-gray-500">
        단위 cm · 카라높이·소매길이는 조끼에 해당 없음(원표 기준)
      </p>
    </div>
  );
}

const TSHIRT_FEATURES: FeatureSectionItem[] = [
  { title: '당일 제작 가능', desc: '급하신 분들도 당일 제작으로 맞춰드립니다.' },
  {
    title: '소량 주문 가능',
    desc: '소량부터 대량까지, 부담 없이 문의하세요.',
  },
  {
    title: 'EPSON 정품 인쇄기',
    desc: '중국산 인쇄기와는 차원이 다른 퀄리티를 경험해 보세요.',
  },
  {
    title: 'GPT로 만든 이미지로 나만의 티셔츠',
    desc: 'GPT로 만든 이미지도 티셔츠로 제작이 가능합니다.',
  },
];

const FAQ = [
  {
    q: '관공서인데 필요 서류 제출이 가능한가요?',
    a: '네, 가능합니다. 저희 부부피오피는 여성기업으로 등록되어 있으며, 필요하신 서류를 모두 구비해 두었습니다. 서류 처리도 빠르게 진행됩니다.',
  },
  {
    q: '단체티도 당일 제작이 가능한가요?',
    a: '수량·원단·티셔츠 재고에 따라 다릅니다. 급하신 건은 카카오톡으로 매수·사이즈·디자인 여부·원단 등을 알려주시면 당일 가능 여부를 바로 안내해 드립니다.',
  },
  {
    q: '디자인이 없어도 제작이 되나요?',
    a: '가능합니다. 로고·문구 이미지나 레퍼런스만 있어도 상담 후 진행할 수 있습니다. 간단 편집이 필요하면 말씀해 주세요.',
  },
  {
    q: '소량만 필요한데 문의해도 될까요?',
    a: '네. 소량부터 대량까지 문의 가능합니다. 수량에 맞춰 인쇄 방식과 견적을 안내해 드립니다.',
  },
  {
    q: '사이즈는 어떻게 되나요?',
    a: (
      <>
        <p>
          <strong>아동용 → 성인용 → 조끼용</strong> 순으로 참고 치수를
          정리했습니다. 원단·제조사·품목마다 차이가 있을 수 있으니, 정확한
          매수·비율은 문의 시 함께 안내해 드립니다.
        </p>
        <p className="font-bold text-gray-900">1. 아동용</p>
        <FaqWideSizeTable
          caption="아동용 티셔츠 치수표"
          colHeaders={['110', '120', '130', '140', '150', 'SS']}
          rows={[
            {
              label: '사이즈',
              values: ['110', '120', '130', '140', '150', 'SS'],
            },
            {
              label: '신장(cm)',
              values: ['108', '116', '130', '137', '150', '157'],
            },
            {
              label: '코드',
              values: ['20', '21', '22', '23', '24', '51'],
            },
            {
              label: '기장',
              values: ['44', '48', '52', '56', '59', '62'],
            },
            {
              label: '몸통폭',
              values: ['34', '36', '38', '40', '42', '44'],
            },
            {
              label: '어깨폭',
              values: ['30', '34', '36', '38', '40', '42'],
            },
            {
              label: '소매장',
              values: ['14', '15', '16', '17', '18', '19'],
            },
          ]}
        />
        <p className="mt-1 text-xs text-gray-500">
          기장·몸통폭·어깨폭·소매장 단위 cm
        </p>
        <p className="mt-4 font-bold text-gray-900">2. 성인용</p>
        <FaqWideSizeTable
          caption="성인용 티셔츠 치수표"
          colHeaders={['S', 'M', 'L', 'LL', '3L', '4L', '5L']}
          rows={[
            {
              label: '사이즈',
              values: ['S', 'M', 'L', 'LL', '3L', '4L', '5L'],
            },
            {
              label: '신장(cm)',
              values: ['163', '170', '179', '181', '183', '186', '189'],
            },
            {
              label: '코드',
              values: ['01', '02', '03', '04', '06', '09', '47'],
            },
            {
              label: '기장',
              values: ['65', '68', '71', '74', '77', '80', '82'],
            },
            {
              label: '몸통폭',
              values: ['47', '50', '53', '56', '60', '64', '68'],
            },
            {
              label: '어깨폭',
              values: ['44', '46', '48', '50', '53', '56', '59'],
            },
            {
              label: '소매장',
              values: ['20', '21', '22', '23', '25', '26', '27'],
            },
          ]}
        />
        <p className="mt-1 text-xs text-gray-500">
          기장·몸통폭·어깨폭·소매장 단위 cm
        </p>
        <p className="mt-4 font-bold text-gray-900">3. 조끼용 (LD25)</p>
        <FaqVestLd25Table caption="작업 조끼 LD25 치수표" />
        <p className="text-xs text-gray-500">
          기능성 원단·특수 규격은 핏이 다를 수 있습니다. 보유 품목 기준표와 다를
          경우 문의해 주세요.
        </p>
      </>
    ),
  },
];

const PACKAGES = [
  {
    title: '소량 티셔츠 제작',
    price: '9,900원~',
    desc: '재질: 면·기능성 원단 / 수량: 1장 · 사이즈는 문의 시 안내',
    tag: '인기' as const,
  },
  {
    title: '동호회 티셔츠 제작',
    price: '15,000원~',
    desc: '재질: 면·기능성 원단 / 수량: 5장 이상 · 사이즈별 비율 문의',
    tag: null,
  },
  {
    title: '작업 조끼 제작',
    price: '9,500원~',
    desc: '재질: 나이론·폴리 / 수량: 5장 이상 · 성인 사이즈(세부 문의)',
    tag: null,
  },
];

export const metadata = {
  title: '단체티 제작 | 부부피오피',
  description:
    '행사·가족 단체티 1장부터 제작. 디자인·인쇄 한 번에. 당일 가능 문의 환영. 부부피오피.',
};

export default function TshirtPage() {
  return (
    <ServicePageLayout
      title="단체티"
      subtitle="단체티"
      featureItems={TSHIRT_FEATURES}
      featureSubheading="정품 장비·맞춤 디자인까지 한 번에 챙깁니다."
      heroTitleAccent
      description={
        <>
          <div className="space-y-2 sm:space-y-2.5">
            <p className="text-lg font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.65)] sm:text-xl sm:leading-snug md:text-[1.5rem] md:leading-snug">
              “행사 앞두고 단체티 아직 준비 안되셨나요?”
            </p>
            <p className="text-lg font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.65)] sm:text-xl sm:leading-snug md:text-[1.5rem] md:leading-snug">
              “급하게 필요한 티셔츠, 당일 급행으로 제작될까요?”
            </p>
            <p className="pt-0.5 text-base font-extrabold leading-snug text-orange-400 [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.85))] sm:text-lg sm:pt-1">
              지금 문의하면 빠르게 제작해드립니다
            </p>
          </div>
          <div className="mt-4 border-t border-white/30 pt-4 text-white sm:mt-5 sm:pt-4">
            <p className="text-base font-normal leading-relaxed text-white/95 sm:text-lg">
              1장부터 단체 주문까지 제작 가능
            </p>
            <p className="mt-1.5 text-base font-normal leading-relaxed text-white/90 sm:mt-2 sm:text-lg">
              디자인부터 인쇄까지 한 번에 진행합니다
            </p>
          </div>
        </>
      }
      heroVideo={{ src: '/tshirt-hero-video.mp4' }}
      heroImage={{
        src: '/images/tshirt-hero.png',
        alt: '단체티 제작·인쇄 작업',
      }}
      packages={PACKAGES}
      faqTitle="단체티 제작 FAQ"
      faqItems={FAQ}
      portfolioItems={[
        {
          title: '기업 행사 단체복',
          imageSrc: '/images/portfolio-tshirt-corporate-event.png',
        },
        {
          title: '오토바이 단체 티셔츠',
          imageSrc: '/images/portfolio-tshirt-motorcycle.png',
        },
        {
          title: '가족 티셔츠',
          imageSrc: '/images/portfolio-tshirt-family.png',
        },
        {
          title: '작업조끼',
          imageSrc: '/images/portfolio-tshirt-work-vest.png',
        },
        {
          title: '행사티셔츠',
          imageSrc: '/images/portfolio-tshirt-event.png',
        },
        {
          title: '가게유니폼',
          imageSrc: '/images/portfolio-tshirt-shop-uniform.png',
        },
        {
          title: '소량기념티셔츠',
          imageSrc: '/images/portfolio-tshirt-small-batch.png',
        },
        {
          title: '행사조끼',
          imageSrc: '/images/portfolio-tshirt-event-vest.png',
        },
      ]}
    />
  );
}
