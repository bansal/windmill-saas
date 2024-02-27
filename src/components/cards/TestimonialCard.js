/* eslint-disable @next/next/no-img-element */
export function TestimonialCard(props) {
  return (
    <div className="group bg-white dark:bg-base-950 rounded-xl p-6">
      <div className="flex items-center gap-2">
        <img
          src={props.avatar}
          alt={props.name}
          className="size-9 rounded-full ring-3 ring-primary-300 border-burple-500"
        />
        <div className="flex flex-col gap-1">
          <h2 className="text-base font-display text-title font-semibold leading-none">
            {props.name}
          </h2>
          <span className="text-xs leading-none text-muted">{props.title}</span>
        </div>
      </div>
      <p className="text-base-600 font-body mt-4">{props.testimonial}</p>
    </div>
  );
}
