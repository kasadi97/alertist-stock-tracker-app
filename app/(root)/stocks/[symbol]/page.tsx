import TradingViewWidget from "@/components/TradingViewWidget";
import WatchlistButton from "@/components/WatchlistButton";
import {
  SYMBOL_INFO_WIDGET_CONFIG,
  CANDLE_CHART_WIDGET_CONFIG,
  BASELINE_WIDGET_CONFIG,
  TECHNICAL_ANALYSIS_WIDGET_CONFIG,
  COMPANY_PROFILE_WIDGET_CONFIG,
  COMPANY_FINANCIALS_WIDGET_CONFIG,
} from "@/lib/constants";

export default async function StockDetails({ params }: StockDetailsPageProps) {
  const { symbol } = await params;
  const base = "https://s3.tradingview.com/external-embedding/embed-widget-";

  return (
    <div className="flex min-h-screen w-full p-4 md:p-6 lg:p-8">
      <div className="grid w-full gap-8 grid-cols-1 xl:grid-cols-2">
        {/* Left column */}
        <section className="flex flex-col gap-8">
          <TradingViewWidget
            title="Symbol Info"
            scriptUrl={`${base}symbol-info.js`}
            config={SYMBOL_INFO_WIDGET_CONFIG(symbol)}
            height={170}
          />
          <div className="flex items-center justify-between">
            <WatchlistButton symbol={symbol.toUpperCase()} company={symbol.toUpperCase()} isInWatchlist={false} />
          </div>
          <TradingViewWidget
            title="Candle Chart"
            scriptUrl={`${base}advanced-chart.js`}
            config={CANDLE_CHART_WIDGET_CONFIG(symbol)}
            height={600}
            className="custom-chart"
          />

          <TradingViewWidget
            title="Baseline Chart"
            scriptUrl={`${base}advanced-chart.js`}
            config={BASELINE_WIDGET_CONFIG(symbol)}
            height={600}
            className="custom-chart"
          />
        </section>

        {/* Right column */}
        <section className="flex flex-col gap-8">

          <TradingViewWidget
            title="Technical Analysis"
            scriptUrl={`${base}technical-analysis.js`}
            config={TECHNICAL_ANALYSIS_WIDGET_CONFIG(symbol)}
            height={400}
          />

          <TradingViewWidget
            title="Company Profile"
            scriptUrl={`${base}symbol-profile.js`}
            config={COMPANY_PROFILE_WIDGET_CONFIG(symbol)}
            height={440}
          />

          <TradingViewWidget
            title="Company Financials"
            scriptUrl={`${base}financials.js`}
            config={COMPANY_FINANCIALS_WIDGET_CONFIG(symbol)}
            height={464}
          />
        </section>
      </div>
    </div>
  );
}
