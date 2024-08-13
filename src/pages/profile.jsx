import Layout from "../components/dashboard/Layout.jsx";

import ProfileSettingHeader from "../components/profile/ProfileSettingHeader.jsx";
import TraderAgreement from "../components/profile/TraderAgreements.jsx";
import PaymentMethod from "../components/profile/PaymentMethod.jsx";
import Detail from "../components/profile/Detail.jsx";
import ChangePassword from "../components/profile/Changepassword.jsx";

const Profile = ({account, setAccount}) => {
    return (
		<Layout setAccount={setAccount} account={account}>
            <div className={'w-full md:px-[30px] md:py-[20px] overflow-hidden'}>

				<ProfileSettingHeader />

				<div className="w-full border-solid border-2 dark:border-yellow-100 dark:text-white p-4 mt-5 sm:text-[18px] text-[12px] rounded-lg">
                    26days until next available withdrawal
				</div>

				<div className="w-full border-solid flex gap-2 border-2 dark:border-green-200 dark:text-white p-4 mt-5 text-[18px] rounded-lg">
					<TraderAgreement/>
				</div>

				<div className={'dashboardCard w-full flex justify-between p-6 mt-5 items-center'}>
					<PaymentMethod/>
				</div>

				<div className={'dashboardCard w-full p-6 mt-5'}>
					<Detail/>
				</div>

				<div className={'dashboardCard w-full p-6 mt-5 items-center'}>
					<ChangePassword/>
				</div>
			</div>
		</Layout>
    );
};

export default Profile;