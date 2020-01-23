const actions = require('./actions');
const base = 'sandbox.voice123.com';

module.exports = {
    baseUrls: function(){
        return {
            home: {home: {url: `https://${base}/`}},
            login: {
                base: {url: `https://accounts.${base}/email/`},
                chooseLogin: {
                    url: `https://accounts.${base}/email/`,
                    actions: actions.actions().setLoginEmail
                },
                typePassword: {
                    url: `https://accounts.${base}/login/`,
                },
            },
            register: {
                base: {url: `https://${base}/onboarding`},
                    emailClient: {
                        url: `https://accounts.${base}/email/?next=/openid/authorize%3Fredirect_uri%3Dhttps%253A%252F%252F${base}%26response_type%3Dcode%26scope%3Dopenid%2520email%26state%3De65a6a8b6868456e8788472c0bdd84f6%26nonce%3De65a6a8b6868456e8788472c0bdd84f6%26context%3Dvoice_actor%26client_id%3D450535`
                    },
                    nameClient: {
                        url: `https://accounts.${base}/email/?next=/openid/authorize%3Fredirect_uri%3Dhttps%253A%252F%252F${base}%26response_type%3Dcode%26scope%3Dopenid%2520email%26state%3De65a6a8b6868456e8788472c0bdd84f6%26nonce%3De65a6a8b6868456e8788472c0bdd84f6%26context%3Dvoice_actor%26client_id%3D450535`,
                        actions: [
                            ...actions.actions().setNewLoginEmail
                        ]
                    },
                
                    languageVA: {
                        url: `https://${base}/onboarding/voice_actor?step=languages`
                    },
                    ageGenderVA: {
                        url: `https://${base}/onboarding/voice_actor?step=voice_age_genders`,
                    },
                    capabilitiesVA: {
                        url: `https://${base}/onboarding/voice_actor?step=recording_capabilities`,
                    },
                    additionalServicesVA: {
                        url: `https://${base}/onboarding/voice_actor?step=additional_services`,
                    },
                    emailVA: {
                        url: `https://${base}/onboarding/voice_actor?step=additional_services`,
                        actions: actions.actions().selectFinishVAData
                    },
                    nameVA: {
                        url: `https://${base}/onboarding/voice_actor?step=additional_services`,
                        actions:[ 
                            ...actions.actions().selectFinishVAData,
                            ...actions.actions().setNewLoginEmail 
                        ]
                    },
                    onboardingVA: {
                        url: `https://${base}/onboarding/voice_actor?step=additional_services`,
                        actions:[ 
                            ...actions.actions().selectFinishVAData,
                            ...actions.actions().setNewLoginEmail,
                            ...actions.actions().setNameVoiceActor
                        ]
                    },
                    secondOnboardingVA: {
                        url: `https://${base}/onboarding/voice_actor?step=additional_services`,
                        actions:[ 
                            ...actions.actions().selectFinishVAData,
                            ...actions.actions().setNewLoginEmail,
                            ...actions.actions().setNameVoiceActor,
                            ...actions.actions().nextOnboardingVA
                        ]
                    }
                
            },
            dashboard: {
                    profileVA: {
                        url: `https://${base}/onboarding/voice_actor?step=additional_services`,
                        actions:[ 
                            ...actions.actions().selectFinishVAData,
                            ...actions.actions().setNewLoginEmail,
                            ...actions.actions().setNameVoiceActor,
                            ...actions.actions().nextOnboardingVA,
                            ...actions.actions().waitVAwelcome,
                            ...actions.actions().nextOnboardingVA,
                            ...actions.actions().waitProfile,
                            
                        ]
                    },
                    searchVA: {
                        url: `https://${base}/onboarding/voice_actor?step=additional_services`,
                        actions:[ 
                            ...actions.actions().selectFinishVAData,
                            ...actions.actions().setNewLoginEmail,
                            ...actions.actions().setNameVoiceActor,
                            ...actions.actions().nextOnboardingVA,
                            ...actions.actions().waitVAwelcome,
                            ...actions.actions().nextOnboardingVA,
                            ...actions.actions().waitProfile,
                            ...actions.actions().navigateSearch
                            
                        ]
                    },
                    messagesVA: {
                        url: `https://${base}/onboarding/voice_actor?step=additional_services`,
                        actions:[ 
                            ...actions.actions().selectFinishVAData,
                            ...actions.actions().setNewLoginEmail,
                            ...actions.actions().setNameVoiceActor,
                            ...actions.actions().nextOnboardingVA,
                            ...actions.actions().nextOnboardingVA,
                            ...actions.actions().waitProfile,
                            ...actions.actions().navigateMessages
                        ]
                    },
                    invitationsVA: {
                        url: `https://${base}/onboarding/voice_actor?step=additional_services`,
                        actions:[ 
                            ...actions.actions().selectFinishVAData,
                            ...actions.actions().setNewLoginEmail,
                            ...actions.actions().setNameVoiceActor,
                            ...actions.actions().nextOnboardingVA,
                            ...actions.actions().nextOnboardingVA,
                            ...actions.actions().waitProfile,
                            ...actions.actions().navigateInvitations
                        ]
                    },
                    offersVA: {
                        url: `https://${base}/onboarding/voice_actor?step=additional_services`,
                        actions:[ 
                            ...actions.actions().selectFinishVAData,
                            ...actions.actions().setNewLoginEmail,
                            ...actions.actions().setNameVoiceActor,
                            ...actions.actions().nextOnboardingVA,
                            ...actions.actions().nextOnboardingVA,
                            ...actions.actions().waitProfile,
                            ...actions.actions().navigateOffers
                        ]
                    },
                    plansVA: {
                        url: `https://${base}/onboarding/voice_actor?step=additional_services`,
                        actions:[ 
                            ...actions.actions().selectFinishVAData,
                            ...actions.actions().setNewLoginEmail,
                            ...actions.actions().setNameVoiceActor,
                            ...actions.actions().nextOnboardingVA,
                            ...actions.actions().nextOnboardingVA,
                            ...actions.actions().waitProfile,
                            ...actions.actions().navigatePlans
                        ]
                    },
                    editProfileVA: {
                        url: `https://${base}/onboarding/voice_actor?step=additional_services`,
                        actions:[ 
                            ...actions.actions().selectFinishVAData,
                            ...actions.actions().setNewLoginEmail,
                            ...actions.actions().setNameVoiceActor,
                            ...actions.actions().nextOnboardingVA,
                            ...actions.actions().nextOnboardingVA,
                            ...actions.actions().waitProfile,
                            ...actions.actions().editProfile
                        ]
                    },
                    addSampleVA: {
                        url: `https://${base}/onboarding/voice_actor?step=additional_services`,
                        actions:[ 
                            ...actions.actions().selectFinishVAData,
                            ...actions.actions().setNewLoginEmail,
                            ...actions.actions().setNameVoiceActor,
                            ...actions.actions().nextOnboardingVA,
                            ...actions.actions().nextOnboardingVA,
                            ...actions.actions().waitProfile,
                            ...actions.actions().addSample
                        ]
                    },
                    editPaymentMethodVA: {
                        url: `https://${base}/onboarding/voice_actor?step=additional_services`,
                        actions:[ 
                            ...actions.actions().selectFinishVAData,
                            ...actions.actions().setNewLoginEmail,
                            ...actions.actions().setNameVoiceActor,
                            ...actions.actions().nextOnboardingVA,
                            ...actions.actions().nextOnboardingVA,
                            ...actions.actions().waitProfile,
                            ...actions.actions().editPaymentMethod
                        ]
                    },
                    checkAnotherProfileVA: {url: `https://${base}/rickregan/?sample=10058609`},
                    invitationSettingsVA: {
                        
                            url: `https://${base}/onboarding/voice_actor?step=additional_services`,
                            actions:[ 
                                ...actions.actions().selectFinishVAData,
                                ...actions.actions().setNewLoginEmail,
                                ...actions.actions().setNameVoiceActor,
                                ...actions.actions().nextOnboardingVA,
                                ...actions.actions().nextOnboardingVA,
                                ...actions.actions().waitProfile,
                                ...actions.actions().invitationSettings
                            ]
                        },
                    projectClient: {
                        url: `https://accounts.${base}/email/?next=/openid/authorize%3Fredirect_uri%3Dhttps%253A%252F%252F${base}%26response_type%3Dcode%26scope%3Dopenid%2520email%26state%3De65a6a8b6868456e8788472c0bdd84f6%26nonce%3De65a6a8b6868456e8788472c0bdd84f6%26context%3Dvoice_actor%26client_id%3D450535`,
                        actions: [
                            ...actions.actions().setNewLoginEmail,
                            ...actions.actions().setNameClient,
                            ...actions.actions().waitProjectClient
                        ]
                    },
                    postProjectClient: {
                        url: `https://accounts.${base}/email/?next=/openid/authorize%3Fredirect_uri%3Dhttps%253A%252F%252F${base}%26response_type%3Dcode%26scope%3Dopenid%2520email%26state%3De65a6a8b6868456e8788472c0bdd84f6%26nonce%3De65a6a8b6868456e8788472c0bdd84f6%26context%3Dvoice_actor%26client_id%3D450535`,
                        actions: [
                            ...actions.actions().setNewLoginEmail,
                            ...actions.actions().setNameClient,
                            ...actions.actions().postProject
                        ]
                    },
                
                
            }
        }
    } 
    };