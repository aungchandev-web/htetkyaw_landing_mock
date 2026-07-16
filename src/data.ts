export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

export interface ProductItem {
  id: string;
  name: string;
  myanmarName: string;
  type: 'premium' | 'standard' | 'byproduct';
  description: string;
  specifications: string[];
  imageUrl: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'milling',
    title: 'High-Tech Rice Milling',
    description: 'Equipped with state-of-the-art Japanese and European milling technologies, our facility processes paddy with maximum recovery rates and minimal broken grains, producing flawlessly polished results.',
    iconName: 'Cpu',
  },
  {
    id: 'sorting',
    title: 'Optical Color Sorting',
    description: 'We utilize advanced multi-spectrum optical color sorters to detect and eliminate yellow, damaged, chalky, or black grains, guaranteeing 99.9% purity in our premium outputs.',
    iconName: 'Eye',
  },
  {
    id: 'wholesale',
    title: 'Wholesale & Distribution',
    description: 'Supplying bulk rice orders to domestic wholesale markets, supermarkets, export partners, and government channels with consistent, certified high-volume delivery capability.',
    iconName: 'Truck',
  },
  {
    id: 'inventory',
    title: 'Storage & Supply Chain',
    description: 'Our modern steel silos with temperature-controlled ventilation maintain the grain moisture and quality, preventing spoilage and ensuring stable supplies throughout the year.',
    iconName: 'Database',
  },
];

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'quality',
    title: 'Uncompromised Quality Assurance',
    description: 'Every batch of paddy undergoes strict laboratory testing before and after milling, validating moisture levels, grain lengths, and purity standards.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'operations',
    title: 'Highly Trusted Operations',
    description: 'HtetKyaw is an established name in Myanmar agriculture. We operate with full transparent pricing, ethical supplier relationships, and reliable delivery logs.',
    iconName: 'Award',
  },
  {
    id: 'efficiency',
    title: 'Efficient Processing Technology',
    description: 'Our automated processing lines reduce physical handling, ensuring pristine hygiene, energy efficiency, and high-capacity processing speed.',
    iconName: 'Zap',
  },
  {
    id: 'supply',
    title: 'Consistent & Stable Supply',
    description: 'With massive warehouse capacity and strategically located operations, we offer steady supply contracts even during seasonal fluctuations.',
    iconName: 'CalendarCheck',
  },
  {
    id: 'team',
    title: 'Experienced Leadership Team',
    description: 'Guided by decades of mill engineering and agricultural trading experience, our team provides seamless business coordination and expert logistics.',
    iconName: 'Users',
  },
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: 'sorting_facility',
    title: 'AI Optical Sorting Line',
    subtitle: 'Precision Quality Control',
    description: 'Modern sensors examine grains in real-time, instantly blasting away color impurities and foreign elements.',
    imageUrl: 'rice_processing_sorting',
  },
  {
    id: 'silo_facility',
    title: 'Modern Silos & Storage',
    subtitle: 'Optimal Freshness Preservation',
    description: 'State-of-the-art aerated steel silos protecting stock from moisture and heat to maintain premium grain freshness.',
    imageUrl: 'rice_warehouse_storage',
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'shwebo',
    name: 'Shwe Bo Pawsan (Premium Jasmine)',
    myanmarName: 'ရွှေဘိုပေါ်ဆန်း',
    type: 'premium',
    description: 'The supreme award-winning aromatic rice of Myanmar. Highly fragrant, and expands three times its size when cooked, remaining soft and sweet.',
    specifications: ['Moisture: ≤ 14%', 'Broken Grains: ≤ 5%', 'Aromatic Grade: Grade A', 'Grain Elongation: 2.5x - 3.0x'],
    imageUrl: 'rice_packaged_products',
  },
  {
    id: 'ayeyarwady',
    name: 'Ayeyarwady Pawsan (Aromatic)',
    myanmarName: 'ဧရာဝတီပေါ်ဆန်း',
    type: 'premium',
    description: 'Grown in the rich fertile alluvial soil of the Ayeyarwady Delta. Distinctly soft, fluffy, and holds a rich traditional aroma prized across households.',
    specifications: ['Moisture: ≤ 14%', 'Broken Grains: ≤ 5%', 'Purity: 99.5%', 'Texture: Highly Soft & Fluffy'],
    imageUrl: 'rice_packaged_products',
  },
  {
    id: 'emata',
    name: 'Emata Long Grain Rice',
    myanmarName: 'ဧမထဆန် (အဆင့်မြင့်)',
    type: 'standard',
    description: 'Highly uniform, beautifully polished long-grain rice. Excellent texture and separation, making it the perfect choice for institutional catering and international markets.',
    specifications: ['Moisture: ≤ 14.5%', 'Broken Grains: 5% / 10% / 15% Grades', 'Chalky Grains: ≤ 4.0%', 'Polishing: Double Silk Polished'],
    imageUrl: 'rice_packaged_products',
  },
  {
    id: 'zeera',
    name: 'Premium Zeera Fluffy Rice',
    myanmarName: 'ဇီရာဆန်',
    type: 'standard',
    description: 'Slender grains known for non-sticky, airy, and fluffy cooking results. Ideal for daily retail markets, restaurants, and fried rice preparation.',
    specifications: ['Moisture: ≤ 14%', 'Broken Grains: ≤ 8%', 'Purity: 99.0%', 'Cooking Style: Fluffy & Non-Sticky'],
    imageUrl: 'rice_packaged_products',
  },
  {
    id: 'broken_rice',
    name: 'Broken Rice (A1-2 Grade)',
    myanmarName: 'ဆန်ကွဲ (A1-2)',
    type: 'byproduct',
    description: 'Clean, well-sorted broken grains from our primary milling line. Extremely consistent and pure, ideal for food processing, flour mills, and quality snacks.',
    specifications: ['Purity: 99.8%', 'Color: Clean white', 'Foreign Matter: ≤ 0.1%', 'Source: Premium Pawsan/Emata millings'],
    imageUrl: 'rice_packaged_products',
  },
  {
    id: 'rice_bran',
    name: 'High-Fat Rice Bran',
    myanmarName: 'ဖွဲနု (အဆီပြည့်)',
    type: 'byproduct',
    description: 'Freshly milled, nutrient-dense outer layer byproduct. Rich in healthy lipids, proteins, and fibers, perfect for rice bran oil extraction and premium animal feed production.',
    specifications: ['Moisture: ≤ 12%', 'Oil Content: ≥ 16%', 'Fibre Content: ≤ 8%', 'Freshness: Highly stable, stored in dry cool zone'],
    imageUrl: 'rice_packaged_products',
  },
];

export const STATS_DATA: StatItem[] = [
  {
    id: 'years',
    value: '25+',
    label: 'Years of Excellence',
    sublabel: 'Serving farmers & consumers since 2001',
  },
  {
    id: 'capacity',
    value: '120,000+',
    label: 'Tons Processed Annually',
    sublabel: 'Ensuring food supply and market stability',
  },
  {
    id: 'partners',
    value: '450+',
    label: 'Trusted Partners',
    sublabel: 'Wholesalers, retail chains & export brokers',
  },
  {
    id: 'silo_cap',
    value: '35,000',
    label: 'Metric Tons Silo Storage',
    sublabel: 'Advanced microclimate-controlled silos',
  },
];
