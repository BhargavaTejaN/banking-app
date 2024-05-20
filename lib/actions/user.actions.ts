"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";

import { parseStringify } from "../utils";

export const signIn = async ({ email, password }: signInProps) => {
  try {
    // mutation
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
    });

    return parseStringify(session);

  } catch (error) {
    console.log("Error In user.actions.ts file : ", error);
  }
};

export const signUp = async ({ password, ...userData }: SignUpParams) => {
    const {email,firstName,lastName} = userData;
    let newUserAccount
  try {
    // create a user account
    const { account, database } = await createAdminClient();

    newUserAccount = await account.create(
        ID.unique(), 
        email,
        password,
        `${firstName} ${lastName}`
    );

    if(!newUserAccount) throw new Error('Error while creating user in user.actions.ts file');

    const newUser = '';

    const session = await account.createEmailPasswordSession(email, password);
  
    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return parseStringify(newUserAccount);
  } catch (error) {
    console.log("Error In user.actions.ts file : ", error);
  }
};

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const result =  await account.get();
    //const user = await getUserInfo({ userId: result.$id});
    return parseStringify(result);
  } catch (error) {
    return null;
  }
}

export const logoutAccount = async() => {
    try {
        const {account} = await createSessionClient();
        cookies().delete('appwrite-session');
        await account.deleteSession('current');
    } catch (error) {
        console.log("Error While logout in user.actions.ts file : ",error);
        return null;
    }
}