import clsx from 'clsx';
import { pricingPlans } from '../data';

function PricingPlans() {
  const isMostPopular = (mostPopular: boolean) =>
    clsx(
      {
        'text-white bg-cyan-500 hover:bg-cyan-600': mostPopular,
      },
      {
        'text-cyan-700 bg-cyan-50 hover:bg-cyan-100': !mostPopular,
      }
    );
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 bg-cyan-50 p-8 font-medium text-cyan-800 grid lg:grid-cols-3 gap-12 lg:gap-8 py-24">
        {pricingPlans.map((item) => {
          return (
            <div
              key={item.title}
              className="border-slate-200 shadow-lg p-8 bg-white rounded-2xl relative flex flex-col"
            >
              <h3 className="font-semibold leading-5 text-lg">{item.title}</h3>
              {item.mostPopular && (
                <p className="absolute top-0 -translate-y-1/2 bg-cyan-500 text-white px-3 py-0.5 font-semibold tracking-wide rounded-full shadow-md">
                  Most Popular
                </p>
              )}
              <p className="text-slate-700 text-sm leading-6">
                {item.description}
              </p>

              <div className="mt-4 bg-slate-50 p-6 rounded-lg -mx-6">
                <p className="text-sm font-semibold text-slate-500 flex items-center">
                  <span>{item.currency}</span>
                  <span className="text-4xl text-slate-900 ml-3">
                    {item.price}
                  </span>
                  <span className="ml-1.5">{item.frequency}</span>
                </p>
              </div>

              {/* features */}
              <ul className="mt-6 space-y-4 flex-1">
                {item.features.map((feature) => {
                  return (
                    <li
                      key={feature}
                      className="text-sm text-slate-500 leading-6"
                    >
                      {feature}
                    </li>
                  );
                })}
              </ul>

              {/* call to action */}
              <a
                href="#"
                className={`mt-8 block px-6 py-4 text-sm font-semibold text-center rounded-lg shadow-md ${isMostPopular(
                  item.mostPopular
                )}`}
              >
                {item.cta}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PricingPlans;
