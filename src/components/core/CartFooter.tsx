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
    <div className="flex gap-3 bg-gray-50 p-4 rounded-xl flex-1 shadow-sm">
      <div className="text-2xl">{icon}</div>
      <div>
        <h4 className="font-semibold text-sm">{title}</h4>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default function CartFooter() {
  return (
    <div className="px-4 py-8 grid grid-cols-2 lg:flex gap-4">
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
        description="For your loved one, in any amount"
      />
    </div>
  );
}

