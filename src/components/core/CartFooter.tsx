export default function CartFooter() {
  return (
    <div className="w-full px-10 py-8 bg-white flex justify-between gap-4 mt-10">
      <InfoBox
        icon="🚚"
        title="Free Shipping"
        description="When you spend $50+"
      />
      <InfoBox
        icon="📞"
        title="Call Us Anytime"
        description="+34 555 5555"
      />
      <InfoBox
        icon="💬"
        title="Chat With Us"
        description="We offer 24-hour chat support"
      />
      <InfoBox
        icon="🎁"
        title="Gift Cards"
        description="For your loved one, in store and online"
      />
    </div>
  );
}

function InfoBox({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl flex-1 shadow-sm">
      <div className="text-2xl">{icon}</div>
      <div>
        <h4 className="font-semibold text-sm">{title}</h4>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
}
