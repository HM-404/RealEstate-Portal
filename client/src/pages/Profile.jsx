function Profile() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-8">My Profile</h1>

      <div className="bg-white shadow rounded-lg p-6">
        <p>
          <strong>Name:</strong> User Name
        </p>
        <p>
          <strong>Email:</strong> user@email.com
        </p>
        <p>
          <strong>Phone:</strong> 9876543210
        </p>
      </div>
    </div>
  );
}

export default Profile;
