import { leadershipTeam } from "../data/leadership";

export default function Leadership() {
  // First leader (top centered)
  const topLeader = leadershipTeam[0];

  // Remaining leaders (3 below)
  const otherLeaders = leadershipTeam.slice(1);

  return (
    <section id="leadership" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl font-semibold text-center mb-4">
          Our Leadership Team
        </h2>

        <p className="text-center text-gray-500 mb-16">
          Experienced professionals guiding our organization toward excellence.
        </p>

        {/* ===== TOP CENTER LEADER ===== */}
        <div className="flex justify-center mb-20">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-xl shadow-lg p-10 text-center flex flex-col items-center">
              <div className="h-48 flex items-center justify-center mb-6">
                <img
                  src={topLeader.image}
                  alt={topLeader.name}
                  className="w-48 h-48 rounded-full object-cover object-[center_20%] ring-4 ring-gold/50"
                />
              </div>

              <h3 className="text-2xl font-semibold">
                {topLeader.name}
              </h3>
              <p className="text-primary font-medium">
                {topLeader.role}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                {topLeader.department}
              </p>
              <p className="text-gray-600 text-sm">
                {topLeader.description}
              </p>
            </div>
          </div>
        </div>

        {/* ===== THREE LEADERS BELOW ===== */}
        <div className="grid md:grid-cols-3 gap-8">
          {otherLeaders.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col items-center"
            >
              <div className="h-36 flex items-center justify-center mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover object-[center_20%] ring-4 ring-green-500"
                />
              </div>

              <h3 className="text-xl font-semibold">
                {member.name}
              </h3>
              <p className="text-primary font-medium">
                {member.role}
              </p>
              <p className="text-sm text-gray-500 mb-3">
                {member.department}
              </p>
              <p className="text-gray-600 text-sm">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
