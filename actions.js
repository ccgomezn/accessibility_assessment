const μs = require("microseconds")

const base = "sandbox.voice123.com";

module.exports = {
    actions: function(){
        return{
                setLoginEmail: [
                    `set field #id_email to cristhian@${base}`,
                    `click element .starrgate-button--small-device`,
                ],
                selectPasswordMethod: [
                    `wait for url to be https://accounts.${base}/choose_login/`,
                    `click element .mdl-button.mdl-js-button.mdl-button--raised.mdl-button--accent.mdl-js-ripple-effect.m-t-2`,
                    `wait for url to be https://accounts.${base}/login/`,
                ],
                setNewLoginEmail: [
                    `wait for element #id_email to be visible`,
                    `set field #id_email to access${μs.now()}@hotmail.com`,
                    `click element .starrgate-button--small-device`,
                ],
                setNameClient: [
                    `wait for element #id_name to be visible`,
                    `set field #id_name to new_name`,
                    `click element button[type="submit"]`,
                    `wait for url to be https://${base}/dashboard/projects`
                ],
                setNameVoiceActor: [
                    `wait for element #id_name to be visible`,
                    `set field #id_name to new_name`,
                    `screen capture example.png`,
                    `click element button:nth-child(1)`,
                    `screen capture example1.png`,
                    `wait for url to be https://${base}/onboarding/voice_actor_welcome`
                ],
                selectFinishVAData: [
                    `click element button:nth-child(5)`,
                    `wait for url to not be https://${base}/onboarding/voice_actor?step=additional_services`,
                ],
                nextOnboardingVA: [
                    `click element .md-button.md-primary.md-theme-v123`
                ],
                waitProfile: [
                    `wait for url to not be https://${base}/onboarding/voice_actor_welcome`,
                    `wait for element .md-card-media-cover to be visible`,
                ],
                navigateSearch: [
                    `navigate to https://${base}/search?service=voice_over`
                ],
                navigateMessages: [
                    `navigate to https://${base}/messages`
                ],navigateInvitations: [
                    `navigate to https://${base}/dashboard/invites`
                ],
                waitVAwelcome: [
                    `wait for url to be https://${base}/onboarding/voice_actor_welcome`,
                ],
                navigateOffers: [
                    `navigate to https://${base}/dashboard/offers`
                ],
                navigatePlans: [
                    `navigate to https://${base}/plans`,
                    `wait for element .scrollable-table to be visible`
                ],
                editProfile: [
                    `click element .md-button.md-primary.md-icon-button.md-theme-v123:nth-child(2)`
                ],
                addSample: [
                    `click element .md-card-actions:nth-child(3) button`
                ],
                editSkills: [
                    `click element .md-card.services.md-theme-v123 button`
                ],
                editPaymentMethod: [
                    `click element .md-card.md-theme-v123:nth-child(5) button`
                ],
                notificationPreferences: [
                    `navigate to https://${base}/notification-preferences`
                ],
                invitationSettings: [
                    `click element .md-toolbar-container button`,
                    `click element .md-list.md-theme-v123 li:nth-child(7)`,
                    `wait for element .md-dialog.md-transition-off to be visible`
                ],
                waitProjectClient: [
                    `wait for element .page-content to be visible`,
                ],
                postProject: [
                    `navigate to https://${base}/post`,
                ]
            }
            
        
    }
    
}