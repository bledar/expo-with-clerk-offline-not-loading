import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { resourceCache } from "@clerk/clerk-expo/resource-cache";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Stack } from "expo-router";

const NavigationLayout = () => {
	const { isSignedIn = false, isLoaded } = useAuth();
	console.log("🚀 ~ NavigationLayout ~ isLoaded:", isLoaded);

	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Protected guard={!isSignedIn}>
				<Stack.Screen name="(auth)/sign-in" />
				<Stack.Screen name="(auth)/sign-up" />
			</Stack.Protected>
			<Stack.Protected guard={isSignedIn}>
				<Stack.Screen name="(home)/index" />
			</Stack.Protected>
		</Stack>
	);
};

export default function RootLayout() {
	return (
		<ClerkProvider
			tokenCache={tokenCache}
			__experimental_resourceCache={resourceCache}
		>
			<NavigationLayout />
		</ClerkProvider>
	);
}
