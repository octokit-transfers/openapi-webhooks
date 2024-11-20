// THIS FILE IS GENERATED - DO NOT EDIT DIRECTLY
// make edits in scripts/generate-types.ts

import type { webhooks as OpenAPIWebhooks } from "@octokit/openapi-webhooks-types";

type WebhookEventDefinition<TEventName extends keyof OpenAPIWebhooks> =
  OpenAPIWebhooks[TEventName]["post"]["requestBody"]["content"]["application/json"];

export type BranchProtectionConfigurationDisabledEvent =
  WebhookEventDefinition<"branch-protection-configuration-disabled">;
export type BranchProtectionConfigurationEnabledEvent =
  WebhookEventDefinition<"branch-protection-configuration-enabled">;
export type BranchProtectionConfigurationEvent =
  | WebhookEventDefinition<"branch-protection-configuration-disabled">
  | WebhookEventDefinition<"branch-protection-configuration-enabled">;
export type BranchProtectionRuleCreatedEvent =
  WebhookEventDefinition<"branch-protection-rule-created">;
export type BranchProtectionRuleDeletedEvent =
  WebhookEventDefinition<"branch-protection-rule-deleted">;
export type BranchProtectionRuleEditedEvent =
  WebhookEventDefinition<"branch-protection-rule-edited">;
export type BranchProtectionRuleEvent =
  | WebhookEventDefinition<"branch-protection-rule-created">
  | WebhookEventDefinition<"branch-protection-rule-deleted">
  | WebhookEventDefinition<"branch-protection-rule-edited">;
export type CheckRunCompletedEvent =
  WebhookEventDefinition<"check-run-completed">;
export type CheckRunCreatedEvent = WebhookEventDefinition<"check-run-created">;
export type CheckRunRequestedActionEvent =
  WebhookEventDefinition<"check-run-requested-action">;
export type CheckRunRerequestedEvent =
  WebhookEventDefinition<"check-run-rerequested">;
export type CheckRunEvent =
  | WebhookEventDefinition<"check-run-completed">
  | WebhookEventDefinition<"check-run-created">
  | WebhookEventDefinition<"check-run-requested-action">
  | WebhookEventDefinition<"check-run-rerequested">;
export type CheckSuiteCompletedEvent =
  WebhookEventDefinition<"check-suite-completed">;
export type CheckSuiteRequestedEvent =
  WebhookEventDefinition<"check-suite-requested">;
export type CheckSuiteRerequestedEvent =
  WebhookEventDefinition<"check-suite-rerequested">;
export type CheckSuiteEvent =
  | WebhookEventDefinition<"check-suite-completed">
  | WebhookEventDefinition<"check-suite-requested">
  | WebhookEventDefinition<"check-suite-rerequested">;
export type CodeScanningAlertAppearedInBranchEvent =
  WebhookEventDefinition<"code-scanning-alert-appeared-in-branch">;
export type CodeScanningAlertClosedByUserEvent =
  WebhookEventDefinition<"code-scanning-alert-closed-by-user">;
export type CodeScanningAlertCreatedEvent =
  WebhookEventDefinition<"code-scanning-alert-created">;
export type CodeScanningAlertFixedEvent =
  WebhookEventDefinition<"code-scanning-alert-fixed">;
export type CodeScanningAlertReopenedEvent =
  WebhookEventDefinition<"code-scanning-alert-reopened">;
export type CodeScanningAlertReopenedByUserEvent =
  WebhookEventDefinition<"code-scanning-alert-reopened-by-user">;
export type CodeScanningAlertEvent =
  | WebhookEventDefinition<"code-scanning-alert-appeared-in-branch">
  | WebhookEventDefinition<"code-scanning-alert-closed-by-user">
  | WebhookEventDefinition<"code-scanning-alert-created">
  | WebhookEventDefinition<"code-scanning-alert-fixed">
  | WebhookEventDefinition<"code-scanning-alert-reopened">
  | WebhookEventDefinition<"code-scanning-alert-reopened-by-user">;
export type CommitCommentEvent =
  WebhookEventDefinition<"commit-comment-created">;
export type CreateEvent = WebhookEventDefinition<"create">;
export type CustomPropertyCreatedEvent =
  WebhookEventDefinition<"custom-property-created">;
export type CustomPropertyDeletedEvent =
  WebhookEventDefinition<"custom-property-deleted">;
export type CustomPropertyUpdatedEvent =
  WebhookEventDefinition<"custom-property-updated">;
export type CustomPropertyEvent =
  | WebhookEventDefinition<"custom-property-created">
  | WebhookEventDefinition<"custom-property-deleted">
  | WebhookEventDefinition<"custom-property-updated">;
export type CustomPropertyValuesEvent =
  WebhookEventDefinition<"custom-property-values-updated">;
export type DeleteEvent = WebhookEventDefinition<"delete">;
export type DependabotAlertAutoDismissedEvent =
  WebhookEventDefinition<"dependabot-alert-auto-dismissed">;
export type DependabotAlertAutoReopenedEvent =
  WebhookEventDefinition<"dependabot-alert-auto-reopened">;
export type DependabotAlertCreatedEvent =
  WebhookEventDefinition<"dependabot-alert-created">;
export type DependabotAlertDismissedEvent =
  WebhookEventDefinition<"dependabot-alert-dismissed">;
export type DependabotAlertFixedEvent =
  WebhookEventDefinition<"dependabot-alert-fixed">;
export type DependabotAlertReintroducedEvent =
  WebhookEventDefinition<"dependabot-alert-reintroduced">;
export type DependabotAlertReopenedEvent =
  WebhookEventDefinition<"dependabot-alert-reopened">;
export type DependabotAlertEvent =
  | WebhookEventDefinition<"dependabot-alert-auto-dismissed">
  | WebhookEventDefinition<"dependabot-alert-auto-reopened">
  | WebhookEventDefinition<"dependabot-alert-created">
  | WebhookEventDefinition<"dependabot-alert-dismissed">
  | WebhookEventDefinition<"dependabot-alert-fixed">
  | WebhookEventDefinition<"dependabot-alert-reintroduced">
  | WebhookEventDefinition<"dependabot-alert-reopened">;
export type DeployKeyCreatedEvent =
  WebhookEventDefinition<"deploy-key-created">;
export type DeployKeyDeletedEvent =
  WebhookEventDefinition<"deploy-key-deleted">;
export type DeployKeyEvent =
  | WebhookEventDefinition<"deploy-key-created">
  | WebhookEventDefinition<"deploy-key-deleted">;
export type DeploymentEvent = WebhookEventDefinition<"deployment-created">;
export type DeploymentProtectionRuleEvent =
  WebhookEventDefinition<"deployment-protection-rule-requested">;
export type DeploymentReviewApprovedEvent =
  WebhookEventDefinition<"deployment-review-approved">;
export type DeploymentReviewRejectedEvent =
  WebhookEventDefinition<"deployment-review-rejected">;
export type DeploymentReviewRequestedEvent =
  WebhookEventDefinition<"deployment-review-requested">;
export type DeploymentReviewEvent =
  | WebhookEventDefinition<"deployment-review-approved">
  | WebhookEventDefinition<"deployment-review-rejected">
  | WebhookEventDefinition<"deployment-review-requested">;
export type DeploymentStatusEvent =
  WebhookEventDefinition<"deployment-status-created">;
export type DiscussionAnsweredEvent =
  WebhookEventDefinition<"discussion-answered">;
export type DiscussionCategoryChangedEvent =
  WebhookEventDefinition<"discussion-category-changed">;
export type DiscussionClosedEvent = WebhookEventDefinition<"discussion-closed">;
export type DiscussionCreatedEvent =
  WebhookEventDefinition<"discussion-created">;
export type DiscussionDeletedEvent =
  WebhookEventDefinition<"discussion-deleted">;
export type DiscussionEditedEvent = WebhookEventDefinition<"discussion-edited">;
export type DiscussionLabeledEvent =
  WebhookEventDefinition<"discussion-labeled">;
export type DiscussionLockedEvent = WebhookEventDefinition<"discussion-locked">;
export type DiscussionPinnedEvent = WebhookEventDefinition<"discussion-pinned">;
export type DiscussionReopenedEvent =
  WebhookEventDefinition<"discussion-reopened">;
export type DiscussionTransferredEvent =
  WebhookEventDefinition<"discussion-transferred">;
export type DiscussionUnansweredEvent =
  WebhookEventDefinition<"discussion-unanswered">;
export type DiscussionUnlabeledEvent =
  WebhookEventDefinition<"discussion-unlabeled">;
export type DiscussionUnlockedEvent =
  WebhookEventDefinition<"discussion-unlocked">;
export type DiscussionUnpinnedEvent =
  WebhookEventDefinition<"discussion-unpinned">;
export type DiscussionEvent =
  | WebhookEventDefinition<"discussion-answered">
  | WebhookEventDefinition<"discussion-category-changed">
  | WebhookEventDefinition<"discussion-closed">
  | WebhookEventDefinition<"discussion-created">
  | WebhookEventDefinition<"discussion-deleted">
  | WebhookEventDefinition<"discussion-edited">
  | WebhookEventDefinition<"discussion-labeled">
  | WebhookEventDefinition<"discussion-locked">
  | WebhookEventDefinition<"discussion-pinned">
  | WebhookEventDefinition<"discussion-reopened">
  | WebhookEventDefinition<"discussion-transferred">
  | WebhookEventDefinition<"discussion-unanswered">
  | WebhookEventDefinition<"discussion-unlabeled">
  | WebhookEventDefinition<"discussion-unlocked">
  | WebhookEventDefinition<"discussion-unpinned">;
export type DiscussionCommentCreatedEvent =
  WebhookEventDefinition<"discussion-comment-created">;
export type DiscussionCommentDeletedEvent =
  WebhookEventDefinition<"discussion-comment-deleted">;
export type DiscussionCommentEditedEvent =
  WebhookEventDefinition<"discussion-comment-edited">;
export type DiscussionCommentEvent =
  | WebhookEventDefinition<"discussion-comment-created">
  | WebhookEventDefinition<"discussion-comment-deleted">
  | WebhookEventDefinition<"discussion-comment-edited">;
export type ForkEvent = WebhookEventDefinition<"fork">;
export type GithubAppAuthorizationEvent =
  WebhookEventDefinition<"github-app-authorization-revoked">;
export type GollumEvent = WebhookEventDefinition<"gollum">;
export type InstallationCreatedEvent =
  WebhookEventDefinition<"installation-created">;
export type InstallationDeletedEvent =
  WebhookEventDefinition<"installation-deleted">;
export type InstallationNewPermissionsAcceptedEvent =
  WebhookEventDefinition<"installation-new-permissions-accepted">;
export type InstallationSuspendEvent =
  WebhookEventDefinition<"installation-suspend">;
export type InstallationUnsuspendEvent =
  WebhookEventDefinition<"installation-unsuspend">;
export type InstallationEvent =
  | WebhookEventDefinition<"installation-created">
  | WebhookEventDefinition<"installation-deleted">
  | WebhookEventDefinition<"installation-new-permissions-accepted">
  | WebhookEventDefinition<"installation-suspend">
  | WebhookEventDefinition<"installation-unsuspend">;
export type InstallationRepositoriesAddedEvent =
  WebhookEventDefinition<"installation-repositories-added">;
export type InstallationRepositoriesRemovedEvent =
  WebhookEventDefinition<"installation-repositories-removed">;
export type InstallationRepositoriesEvent =
  | WebhookEventDefinition<"installation-repositories-added">
  | WebhookEventDefinition<"installation-repositories-removed">;
export type InstallationTargetEvent =
  WebhookEventDefinition<"installation-target-renamed">;
export type IssueCommentCreatedEvent =
  WebhookEventDefinition<"issue-comment-created">;
export type IssueCommentDeletedEvent =
  WebhookEventDefinition<"issue-comment-deleted">;
export type IssueCommentEditedEvent =
  WebhookEventDefinition<"issue-comment-edited">;
export type IssueCommentEvent =
  | WebhookEventDefinition<"issue-comment-created">
  | WebhookEventDefinition<"issue-comment-deleted">
  | WebhookEventDefinition<"issue-comment-edited">;
export type IssuesAssignedEvent = WebhookEventDefinition<"issues-assigned">;
export type IssuesClosedEvent = WebhookEventDefinition<"issues-closed">;
export type IssuesDeletedEvent = WebhookEventDefinition<"issues-deleted">;
export type IssuesDemilestonedEvent =
  WebhookEventDefinition<"issues-demilestoned">;
export type IssuesEditedEvent = WebhookEventDefinition<"issues-edited">;
export type IssuesLabeledEvent = WebhookEventDefinition<"issues-labeled">;
export type IssuesLockedEvent = WebhookEventDefinition<"issues-locked">;
export type IssuesMilestonedEvent = WebhookEventDefinition<"issues-milestoned">;
export type IssuesOpenedEvent = WebhookEventDefinition<"issues-opened">;
export type IssuesPinnedEvent = WebhookEventDefinition<"issues-pinned">;
export type IssuesReopenedEvent = WebhookEventDefinition<"issues-reopened">;
export type IssuesTransferredEvent =
  WebhookEventDefinition<"issues-transferred">;
export type IssuesUnassignedEvent = WebhookEventDefinition<"issues-unassigned">;
export type IssuesUnlabeledEvent = WebhookEventDefinition<"issues-unlabeled">;
export type IssuesUnlockedEvent = WebhookEventDefinition<"issues-unlocked">;
export type IssuesUnpinnedEvent = WebhookEventDefinition<"issues-unpinned">;
export type IssuesEvent =
  | WebhookEventDefinition<"issues-assigned">
  | WebhookEventDefinition<"issues-closed">
  | WebhookEventDefinition<"issues-deleted">
  | WebhookEventDefinition<"issues-demilestoned">
  | WebhookEventDefinition<"issues-edited">
  | WebhookEventDefinition<"issues-labeled">
  | WebhookEventDefinition<"issues-locked">
  | WebhookEventDefinition<"issues-milestoned">
  | WebhookEventDefinition<"issues-opened">
  | WebhookEventDefinition<"issues-pinned">
  | WebhookEventDefinition<"issues-reopened">
  | WebhookEventDefinition<"issues-transferred">
  | WebhookEventDefinition<"issues-unassigned">
  | WebhookEventDefinition<"issues-unlabeled">
  | WebhookEventDefinition<"issues-unlocked">
  | WebhookEventDefinition<"issues-unpinned">;
export type LabelCreatedEvent = WebhookEventDefinition<"label-created">;
export type LabelDeletedEvent = WebhookEventDefinition<"label-deleted">;
export type LabelEditedEvent = WebhookEventDefinition<"label-edited">;
export type LabelEvent =
  | WebhookEventDefinition<"label-created">
  | WebhookEventDefinition<"label-deleted">
  | WebhookEventDefinition<"label-edited">;
export type MarketplacePurchaseCancelledEvent =
  WebhookEventDefinition<"marketplace-purchase-cancelled">;
export type MarketplacePurchaseChangedEvent =
  WebhookEventDefinition<"marketplace-purchase-changed">;
export type MarketplacePurchasePendingChangeEvent =
  WebhookEventDefinition<"marketplace-purchase-pending-change">;
export type MarketplacePurchasePendingChangeCancelledEvent =
  WebhookEventDefinition<"marketplace-purchase-pending-change-cancelled">;
export type MarketplacePurchasePurchasedEvent =
  WebhookEventDefinition<"marketplace-purchase-purchased">;
export type MarketplacePurchaseEvent =
  | WebhookEventDefinition<"marketplace-purchase-cancelled">
  | WebhookEventDefinition<"marketplace-purchase-changed">
  | WebhookEventDefinition<"marketplace-purchase-pending-change">
  | WebhookEventDefinition<"marketplace-purchase-pending-change-cancelled">
  | WebhookEventDefinition<"marketplace-purchase-purchased">;
export type MemberAddedEvent = WebhookEventDefinition<"member-added">;
export type MemberEditedEvent = WebhookEventDefinition<"member-edited">;
export type MemberRemovedEvent = WebhookEventDefinition<"member-removed">;
export type MemberEvent =
  | WebhookEventDefinition<"member-added">
  | WebhookEventDefinition<"member-edited">
  | WebhookEventDefinition<"member-removed">;
export type MembershipAddedEvent = WebhookEventDefinition<"membership-added">;
export type MembershipRemovedEvent =
  WebhookEventDefinition<"membership-removed">;
export type MembershipEvent =
  | WebhookEventDefinition<"membership-added">
  | WebhookEventDefinition<"membership-removed">;
export type MergeGroupChecksRequestedEvent =
  WebhookEventDefinition<"merge-group-checks-requested">;
export type MergeGroupDestroyedEvent =
  WebhookEventDefinition<"merge-group-destroyed">;
export type MergeGroupEvent =
  | WebhookEventDefinition<"merge-group-checks-requested">
  | WebhookEventDefinition<"merge-group-destroyed">;
export type MetaEvent = WebhookEventDefinition<"meta-deleted">;
export type MilestoneClosedEvent = WebhookEventDefinition<"milestone-closed">;
export type MilestoneCreatedEvent = WebhookEventDefinition<"milestone-created">;
export type MilestoneDeletedEvent = WebhookEventDefinition<"milestone-deleted">;
export type MilestoneEditedEvent = WebhookEventDefinition<"milestone-edited">;
export type MilestoneOpenedEvent = WebhookEventDefinition<"milestone-opened">;
export type MilestoneEvent =
  | WebhookEventDefinition<"milestone-closed">
  | WebhookEventDefinition<"milestone-created">
  | WebhookEventDefinition<"milestone-deleted">
  | WebhookEventDefinition<"milestone-edited">
  | WebhookEventDefinition<"milestone-opened">;
export type OrgBlockBlockedEvent = WebhookEventDefinition<"org-block-blocked">;
export type OrgBlockUnblockedEvent =
  WebhookEventDefinition<"org-block-unblocked">;
export type OrgBlockEvent =
  | WebhookEventDefinition<"org-block-blocked">
  | WebhookEventDefinition<"org-block-unblocked">;
export type OrganizationDeletedEvent =
  WebhookEventDefinition<"organization-deleted">;
export type OrganizationMemberAddedEvent =
  WebhookEventDefinition<"organization-member-added">;
export type OrganizationMemberInvitedEvent =
  WebhookEventDefinition<"organization-member-invited">;
export type OrganizationMemberRemovedEvent =
  WebhookEventDefinition<"organization-member-removed">;
export type OrganizationRenamedEvent =
  WebhookEventDefinition<"organization-renamed">;
export type OrganizationEvent =
  | WebhookEventDefinition<"organization-deleted">
  | WebhookEventDefinition<"organization-member-added">
  | WebhookEventDefinition<"organization-member-invited">
  | WebhookEventDefinition<"organization-member-removed">
  | WebhookEventDefinition<"organization-renamed">;
export type PackagePublishedEvent = WebhookEventDefinition<"package-published">;
export type PackageUpdatedEvent = WebhookEventDefinition<"package-updated">;
export type PackageEvent =
  | WebhookEventDefinition<"package-published">
  | WebhookEventDefinition<"package-updated">;
export type PageBuildEvent = WebhookEventDefinition<"page-build">;
export type PersonalAccessTokenRequestApprovedEvent =
  WebhookEventDefinition<"personal-access-token-request-approved">;
export type PersonalAccessTokenRequestCancelledEvent =
  WebhookEventDefinition<"personal-access-token-request-cancelled">;
export type PersonalAccessTokenRequestCreatedEvent =
  WebhookEventDefinition<"personal-access-token-request-created">;
export type PersonalAccessTokenRequestDeniedEvent =
  WebhookEventDefinition<"personal-access-token-request-denied">;
export type PersonalAccessTokenRequestEvent =
  | WebhookEventDefinition<"personal-access-token-request-approved">
  | WebhookEventDefinition<"personal-access-token-request-cancelled">
  | WebhookEventDefinition<"personal-access-token-request-created">
  | WebhookEventDefinition<"personal-access-token-request-denied">;
export type PingEvent = WebhookEventDefinition<"ping">;
export type ProjectClosedEvent = WebhookEventDefinition<"project-closed">;
export type ProjectCreatedEvent = WebhookEventDefinition<"project-created">;
export type ProjectDeletedEvent = WebhookEventDefinition<"project-deleted">;
export type ProjectEditedEvent = WebhookEventDefinition<"project-edited">;
export type ProjectReopenedEvent = WebhookEventDefinition<"project-reopened">;
export type ProjectEvent =
  | WebhookEventDefinition<"project-closed">
  | WebhookEventDefinition<"project-created">
  | WebhookEventDefinition<"project-deleted">
  | WebhookEventDefinition<"project-edited">
  | WebhookEventDefinition<"project-reopened">;
export type ProjectCardConvertedEvent =
  WebhookEventDefinition<"project-card-converted">;
export type ProjectCardCreatedEvent =
  WebhookEventDefinition<"project-card-created">;
export type ProjectCardDeletedEvent =
  WebhookEventDefinition<"project-card-deleted">;
export type ProjectCardEditedEvent =
  WebhookEventDefinition<"project-card-edited">;
export type ProjectCardMovedEvent =
  WebhookEventDefinition<"project-card-moved">;
export type ProjectCardEvent =
  | WebhookEventDefinition<"project-card-converted">
  | WebhookEventDefinition<"project-card-created">
  | WebhookEventDefinition<"project-card-deleted">
  | WebhookEventDefinition<"project-card-edited">
  | WebhookEventDefinition<"project-card-moved">;
export type ProjectColumnCreatedEvent =
  WebhookEventDefinition<"project-column-created">;
export type ProjectColumnDeletedEvent =
  WebhookEventDefinition<"project-column-deleted">;
export type ProjectColumnEditedEvent =
  WebhookEventDefinition<"project-column-edited">;
export type ProjectColumnMovedEvent =
  WebhookEventDefinition<"project-column-moved">;
export type ProjectColumnEvent =
  | WebhookEventDefinition<"project-column-created">
  | WebhookEventDefinition<"project-column-deleted">
  | WebhookEventDefinition<"project-column-edited">
  | WebhookEventDefinition<"project-column-moved">;
export type ProjectsV2ClosedEvent =
  WebhookEventDefinition<"projects-v2-closed">;
export type ProjectsV2CreatedEvent =
  WebhookEventDefinition<"projects-v2-created">;
export type ProjectsV2DeletedEvent =
  WebhookEventDefinition<"projects-v2-deleted">;
export type ProjectsV2EditedEvent =
  WebhookEventDefinition<"projects-v2-edited">;
export type ProjectsV2ReopenedEvent =
  WebhookEventDefinition<"projects-v2-reopened">;
export type ProjectsV2Event =
  | WebhookEventDefinition<"projects-v2-closed">
  | WebhookEventDefinition<"projects-v2-created">
  | WebhookEventDefinition<"projects-v2-deleted">
  | WebhookEventDefinition<"projects-v2-edited">
  | WebhookEventDefinition<"projects-v2-reopened">;
export type ProjectsV2ItemArchivedEvent =
  WebhookEventDefinition<"projects-v2-item-archived">;
export type ProjectsV2ItemConvertedEvent =
  WebhookEventDefinition<"projects-v2-item-converted">;
export type ProjectsV2ItemCreatedEvent =
  WebhookEventDefinition<"projects-v2-item-created">;
export type ProjectsV2ItemDeletedEvent =
  WebhookEventDefinition<"projects-v2-item-deleted">;
export type ProjectsV2ItemEditedEvent =
  WebhookEventDefinition<"projects-v2-item-edited">;
export type ProjectsV2ItemReorderedEvent =
  WebhookEventDefinition<"projects-v2-item-reordered">;
export type ProjectsV2ItemRestoredEvent =
  WebhookEventDefinition<"projects-v2-item-restored">;
export type ProjectsV2ItemEvent =
  | WebhookEventDefinition<"projects-v2-item-archived">
  | WebhookEventDefinition<"projects-v2-item-converted">
  | WebhookEventDefinition<"projects-v2-item-created">
  | WebhookEventDefinition<"projects-v2-item-deleted">
  | WebhookEventDefinition<"projects-v2-item-edited">
  | WebhookEventDefinition<"projects-v2-item-reordered">
  | WebhookEventDefinition<"projects-v2-item-restored">;
export type ProjectsV2StatusUpdateCreatedEvent =
  WebhookEventDefinition<"projects-v2-status-update-created">;
export type ProjectsV2StatusUpdateDeletedEvent =
  WebhookEventDefinition<"projects-v2-status-update-deleted">;
export type ProjectsV2StatusUpdateEditedEvent =
  WebhookEventDefinition<"projects-v2-status-update-edited">;
export type ProjectsV2StatusUpdateEvent =
  | WebhookEventDefinition<"projects-v2-status-update-created">
  | WebhookEventDefinition<"projects-v2-status-update-deleted">
  | WebhookEventDefinition<"projects-v2-status-update-edited">;
export type PublicEvent = WebhookEventDefinition<"public">;
export type PullRequestAssignedEvent =
  WebhookEventDefinition<"pull-request-assigned">;
export type PullRequestAutoMergeDisabledEvent =
  WebhookEventDefinition<"pull-request-auto-merge-disabled">;
export type PullRequestAutoMergeEnabledEvent =
  WebhookEventDefinition<"pull-request-auto-merge-enabled">;
export type PullRequestClosedEvent =
  WebhookEventDefinition<"pull-request-closed">;
export type PullRequestConvertedToDraftEvent =
  WebhookEventDefinition<"pull-request-converted-to-draft">;
export type PullRequestDemilestonedEvent =
  WebhookEventDefinition<"pull-request-demilestoned">;
export type PullRequestDequeuedEvent =
  WebhookEventDefinition<"pull-request-dequeued">;
export type PullRequestEditedEvent =
  WebhookEventDefinition<"pull-request-edited">;
export type PullRequestEnqueuedEvent =
  WebhookEventDefinition<"pull-request-enqueued">;
export type PullRequestLabeledEvent =
  WebhookEventDefinition<"pull-request-labeled">;
export type PullRequestLockedEvent =
  WebhookEventDefinition<"pull-request-locked">;
export type PullRequestMilestonedEvent =
  WebhookEventDefinition<"pull-request-milestoned">;
export type PullRequestOpenedEvent =
  WebhookEventDefinition<"pull-request-opened">;
export type PullRequestReadyForReviewEvent =
  WebhookEventDefinition<"pull-request-ready-for-review">;
export type PullRequestReopenedEvent =
  WebhookEventDefinition<"pull-request-reopened">;
export type PullRequestReviewRequestRemovedEvent =
  WebhookEventDefinition<"pull-request-review-request-removed">;
export type PullRequestReviewRequestedEvent =
  WebhookEventDefinition<"pull-request-review-requested">;
export type PullRequestSynchronizeEvent =
  WebhookEventDefinition<"pull-request-synchronize">;
export type PullRequestUnassignedEvent =
  WebhookEventDefinition<"pull-request-unassigned">;
export type PullRequestUnlabeledEvent =
  WebhookEventDefinition<"pull-request-unlabeled">;
export type PullRequestUnlockedEvent =
  WebhookEventDefinition<"pull-request-unlocked">;
export type PullRequestEvent =
  | WebhookEventDefinition<"pull-request-assigned">
  | WebhookEventDefinition<"pull-request-auto-merge-disabled">
  | WebhookEventDefinition<"pull-request-auto-merge-enabled">
  | WebhookEventDefinition<"pull-request-closed">
  | WebhookEventDefinition<"pull-request-converted-to-draft">
  | WebhookEventDefinition<"pull-request-demilestoned">
  | WebhookEventDefinition<"pull-request-dequeued">
  | WebhookEventDefinition<"pull-request-edited">
  | WebhookEventDefinition<"pull-request-enqueued">
  | WebhookEventDefinition<"pull-request-labeled">
  | WebhookEventDefinition<"pull-request-locked">
  | WebhookEventDefinition<"pull-request-milestoned">
  | WebhookEventDefinition<"pull-request-opened">
  | WebhookEventDefinition<"pull-request-ready-for-review">
  | WebhookEventDefinition<"pull-request-reopened">
  | WebhookEventDefinition<"pull-request-review-request-removed">
  | WebhookEventDefinition<"pull-request-review-requested">
  | WebhookEventDefinition<"pull-request-synchronize">
  | WebhookEventDefinition<"pull-request-unassigned">
  | WebhookEventDefinition<"pull-request-unlabeled">
  | WebhookEventDefinition<"pull-request-unlocked">;
export type PullRequestReviewDismissedEvent =
  WebhookEventDefinition<"pull-request-review-dismissed">;
export type PullRequestReviewEditedEvent =
  WebhookEventDefinition<"pull-request-review-edited">;
export type PullRequestReviewSubmittedEvent =
  WebhookEventDefinition<"pull-request-review-submitted">;
export type PullRequestReviewEvent =
  | WebhookEventDefinition<"pull-request-review-dismissed">
  | WebhookEventDefinition<"pull-request-review-edited">
  | WebhookEventDefinition<"pull-request-review-submitted">;
export type PullRequestReviewCommentCreatedEvent =
  WebhookEventDefinition<"pull-request-review-comment-created">;
export type PullRequestReviewCommentDeletedEvent =
  WebhookEventDefinition<"pull-request-review-comment-deleted">;
export type PullRequestReviewCommentEditedEvent =
  WebhookEventDefinition<"pull-request-review-comment-edited">;
export type PullRequestReviewCommentEvent =
  | WebhookEventDefinition<"pull-request-review-comment-created">
  | WebhookEventDefinition<"pull-request-review-comment-deleted">
  | WebhookEventDefinition<"pull-request-review-comment-edited">;
export type PullRequestReviewThreadResolvedEvent =
  WebhookEventDefinition<"pull-request-review-thread-resolved">;
export type PullRequestReviewThreadUnresolvedEvent =
  WebhookEventDefinition<"pull-request-review-thread-unresolved">;
export type PullRequestReviewThreadEvent =
  | WebhookEventDefinition<"pull-request-review-thread-resolved">
  | WebhookEventDefinition<"pull-request-review-thread-unresolved">;
export type PushEvent = WebhookEventDefinition<"push">;
export type RegistryPackagePublishedEvent =
  WebhookEventDefinition<"registry-package-published">;
export type RegistryPackageUpdatedEvent =
  WebhookEventDefinition<"registry-package-updated">;
export type RegistryPackageEvent =
  | WebhookEventDefinition<"registry-package-published">
  | WebhookEventDefinition<"registry-package-updated">;
export type ReleaseCreatedEvent = WebhookEventDefinition<"release-created">;
export type ReleaseDeletedEvent = WebhookEventDefinition<"release-deleted">;
export type ReleaseEditedEvent = WebhookEventDefinition<"release-edited">;
export type ReleasePrereleasedEvent =
  WebhookEventDefinition<"release-prereleased">;
export type ReleasePublishedEvent = WebhookEventDefinition<"release-published">;
export type ReleaseReleasedEvent = WebhookEventDefinition<"release-released">;
export type ReleaseUnpublishedEvent =
  WebhookEventDefinition<"release-unpublished">;
export type ReleaseEvent =
  | WebhookEventDefinition<"release-created">
  | WebhookEventDefinition<"release-deleted">
  | WebhookEventDefinition<"release-edited">
  | WebhookEventDefinition<"release-prereleased">
  | WebhookEventDefinition<"release-published">
  | WebhookEventDefinition<"release-released">
  | WebhookEventDefinition<"release-unpublished">;
export type RepositoryArchivedEvent =
  WebhookEventDefinition<"repository-archived">;
export type RepositoryCreatedEvent =
  WebhookEventDefinition<"repository-created">;
export type RepositoryDeletedEvent =
  WebhookEventDefinition<"repository-deleted">;
export type RepositoryEditedEvent = WebhookEventDefinition<"repository-edited">;
export type RepositoryPrivatizedEvent =
  WebhookEventDefinition<"repository-privatized">;
export type RepositoryPublicizedEvent =
  WebhookEventDefinition<"repository-publicized">;
export type RepositoryRenamedEvent =
  WebhookEventDefinition<"repository-renamed">;
export type RepositoryTransferredEvent =
  WebhookEventDefinition<"repository-transferred">;
export type RepositoryUnarchivedEvent =
  WebhookEventDefinition<"repository-unarchived">;
export type RepositoryEvent =
  | WebhookEventDefinition<"repository-archived">
  | WebhookEventDefinition<"repository-created">
  | WebhookEventDefinition<"repository-deleted">
  | WebhookEventDefinition<"repository-edited">
  | WebhookEventDefinition<"repository-privatized">
  | WebhookEventDefinition<"repository-publicized">
  | WebhookEventDefinition<"repository-renamed">
  | WebhookEventDefinition<"repository-transferred">
  | WebhookEventDefinition<"repository-unarchived">;
export type RepositoryAdvisoryPublishedEvent =
  WebhookEventDefinition<"repository-advisory-published">;
export type RepositoryAdvisoryReportedEvent =
  WebhookEventDefinition<"repository-advisory-reported">;
export type RepositoryAdvisoryEvent =
  | WebhookEventDefinition<"repository-advisory-published">
  | WebhookEventDefinition<"repository-advisory-reported">;
export type RepositoryDispatchEvent =
  WebhookEventDefinition<"repository-dispatch-sample.collected">;
export type RepositoryImportEvent = WebhookEventDefinition<"repository-import">;
export type RepositoryRulesetCreatedEvent =
  WebhookEventDefinition<"repository-ruleset-created">;
export type RepositoryRulesetDeletedEvent =
  WebhookEventDefinition<"repository-ruleset-deleted">;
export type RepositoryRulesetEditedEvent =
  WebhookEventDefinition<"repository-ruleset-edited">;
export type RepositoryRulesetEvent =
  | WebhookEventDefinition<"repository-ruleset-created">
  | WebhookEventDefinition<"repository-ruleset-deleted">
  | WebhookEventDefinition<"repository-ruleset-edited">;
export type RepositoryVulnerabilityAlertCreateEvent =
  WebhookEventDefinition<"repository-vulnerability-alert-create">;
export type RepositoryVulnerabilityAlertDismissEvent =
  WebhookEventDefinition<"repository-vulnerability-alert-dismiss">;
export type RepositoryVulnerabilityAlertReopenEvent =
  WebhookEventDefinition<"repository-vulnerability-alert-reopen">;
export type RepositoryVulnerabilityAlertResolveEvent =
  WebhookEventDefinition<"repository-vulnerability-alert-resolve">;
export type RepositoryVulnerabilityAlertEvent =
  | WebhookEventDefinition<"repository-vulnerability-alert-create">
  | WebhookEventDefinition<"repository-vulnerability-alert-dismiss">
  | WebhookEventDefinition<"repository-vulnerability-alert-reopen">
  | WebhookEventDefinition<"repository-vulnerability-alert-resolve">;
export type SecretScanningAlertCreatedEvent =
  WebhookEventDefinition<"secret-scanning-alert-created">;
export type SecretScanningAlertPubliclyLeakedEvent =
  WebhookEventDefinition<"secret-scanning-alert-publicly-leaked">;
export type SecretScanningAlertReopenedEvent =
  WebhookEventDefinition<"secret-scanning-alert-reopened">;
export type SecretScanningAlertResolvedEvent =
  WebhookEventDefinition<"secret-scanning-alert-resolved">;
export type SecretScanningAlertValidatedEvent =
  WebhookEventDefinition<"secret-scanning-alert-validated">;
export type SecretScanningAlertEvent =
  | WebhookEventDefinition<"secret-scanning-alert-created">
  | WebhookEventDefinition<"secret-scanning-alert-publicly-leaked">
  | WebhookEventDefinition<"secret-scanning-alert-reopened">
  | WebhookEventDefinition<"secret-scanning-alert-resolved">
  | WebhookEventDefinition<"secret-scanning-alert-validated">;
export type SecretScanningAlertLocationEvent =
  WebhookEventDefinition<"secret-scanning-alert-location-created">;
export type SecurityAdvisoryPublishedEvent =
  WebhookEventDefinition<"security-advisory-published">;
export type SecurityAdvisoryUpdatedEvent =
  WebhookEventDefinition<"security-advisory-updated">;
export type SecurityAdvisoryWithdrawnEvent =
  WebhookEventDefinition<"security-advisory-withdrawn">;
export type SecurityAdvisoryEvent =
  | WebhookEventDefinition<"security-advisory-published">
  | WebhookEventDefinition<"security-advisory-updated">
  | WebhookEventDefinition<"security-advisory-withdrawn">;
export type SecurityAndAnalysisEvent =
  WebhookEventDefinition<"security-and-analysis">;
export type SponsorshipCancelledEvent =
  WebhookEventDefinition<"sponsorship-cancelled">;
export type SponsorshipCreatedEvent =
  WebhookEventDefinition<"sponsorship-created">;
export type SponsorshipEditedEvent =
  WebhookEventDefinition<"sponsorship-edited">;
export type SponsorshipPendingCancellationEvent =
  WebhookEventDefinition<"sponsorship-pending-cancellation">;
export type SponsorshipPendingTierChangeEvent =
  WebhookEventDefinition<"sponsorship-pending-tier-change">;
export type SponsorshipTierChangedEvent =
  WebhookEventDefinition<"sponsorship-tier-changed">;
export type SponsorshipEvent =
  | WebhookEventDefinition<"sponsorship-cancelled">
  | WebhookEventDefinition<"sponsorship-created">
  | WebhookEventDefinition<"sponsorship-edited">
  | WebhookEventDefinition<"sponsorship-pending-cancellation">
  | WebhookEventDefinition<"sponsorship-pending-tier-change">
  | WebhookEventDefinition<"sponsorship-tier-changed">;
export type StarCreatedEvent = WebhookEventDefinition<"star-created">;
export type StarDeletedEvent = WebhookEventDefinition<"star-deleted">;
export type StarEvent =
  | WebhookEventDefinition<"star-created">
  | WebhookEventDefinition<"star-deleted">;
export type StatusEvent = WebhookEventDefinition<"status">;
export type SubIssuesParentIssueAddedEvent =
  WebhookEventDefinition<"sub-issues-parent-issue-added">;
export type SubIssuesParentIssueRemovedEvent =
  WebhookEventDefinition<"sub-issues-parent-issue-removed">;
export type SubIssuesSubIssueAddedEvent =
  WebhookEventDefinition<"sub-issues-sub-issue-added">;
export type SubIssuesSubIssueRemovedEvent =
  WebhookEventDefinition<"sub-issues-sub-issue-removed">;
export type SubIssuesEvent =
  | WebhookEventDefinition<"sub-issues-parent-issue-added">
  | WebhookEventDefinition<"sub-issues-parent-issue-removed">
  | WebhookEventDefinition<"sub-issues-sub-issue-added">
  | WebhookEventDefinition<"sub-issues-sub-issue-removed">;
export type TeamAddedToRepositoryEvent =
  WebhookEventDefinition<"team-added-to-repository">;
export type TeamCreatedEvent = WebhookEventDefinition<"team-created">;
export type TeamDeletedEvent = WebhookEventDefinition<"team-deleted">;
export type TeamEditedEvent = WebhookEventDefinition<"team-edited">;
export type TeamRemovedFromRepositoryEvent =
  WebhookEventDefinition<"team-removed-from-repository">;
export type TeamEvent =
  | WebhookEventDefinition<"team-added-to-repository">
  | WebhookEventDefinition<"team-created">
  | WebhookEventDefinition<"team-deleted">
  | WebhookEventDefinition<"team-edited">
  | WebhookEventDefinition<"team-removed-from-repository">;
export type TeamAddEvent = WebhookEventDefinition<"team-add">;
export type WatchEvent = WebhookEventDefinition<"watch-started">;
export type WorkflowDispatchEvent = WebhookEventDefinition<"workflow-dispatch">;
export type WorkflowJobCompletedEvent =
  WebhookEventDefinition<"workflow-job-completed">;
export type WorkflowJobInProgressEvent =
  WebhookEventDefinition<"workflow-job-in-progress">;
export type WorkflowJobQueuedEvent =
  WebhookEventDefinition<"workflow-job-queued">;
export type WorkflowJobWaitingEvent =
  WebhookEventDefinition<"workflow-job-waiting">;
export type WorkflowJobEvent =
  | WebhookEventDefinition<"workflow-job-completed">
  | WebhookEventDefinition<"workflow-job-in-progress">
  | WebhookEventDefinition<"workflow-job-queued">
  | WebhookEventDefinition<"workflow-job-waiting">;
export type WorkflowRunCompletedEvent =
  WebhookEventDefinition<"workflow-run-completed">;
export type WorkflowRunInProgressEvent =
  WebhookEventDefinition<"workflow-run-in-progress">;
export type WorkflowRunRequestedEvent =
  WebhookEventDefinition<"workflow-run-requested">;
export type WorkflowRunEvent =
  | WebhookEventDefinition<"workflow-run-completed">
  | WebhookEventDefinition<"workflow-run-in-progress">
  | WebhookEventDefinition<"workflow-run-requested">;
export type EventPayloadMap = {
  branch_protection_configuration:
    | WebhookEventDefinition<"branch_protection_configuration.disabled">
    | WebhookEventDefinition<"branch_protection_configuration.enabled">;
  branch_protection_rule:
    | WebhookEventDefinition<"branch_protection_rule.created">
    | WebhookEventDefinition<"branch_protection_rule.deleted">
    | WebhookEventDefinition<"branch_protection_rule.edited">;
  check_run:
    | WebhookEventDefinition<"check_run.completed">
    | WebhookEventDefinition<"check_run.created">
    | WebhookEventDefinition<"check_run.requested_action">
    | WebhookEventDefinition<"check_run.rerequested">;
  check_suite:
    | WebhookEventDefinition<"check_suite.completed">
    | WebhookEventDefinition<"check_suite.requested">
    | WebhookEventDefinition<"check_suite.rerequested">;
  code_scanning_alert:
    | WebhookEventDefinition<"code_scanning_alert.appeared_in_branch">
    | WebhookEventDefinition<"code_scanning_alert.closed_by_user">
    | WebhookEventDefinition<"code_scanning_alert.created">
    | WebhookEventDefinition<"code_scanning_alert.fixed">
    | WebhookEventDefinition<"code_scanning_alert.reopened">
    | WebhookEventDefinition<"code_scanning_alert.reopened_by_user">;
  commit_comment: WebhookEventDefinition<"commit_comment.created">;
  create: WebhookEventDefinition<"create">;
  custom_property:
    | WebhookEventDefinition<"custom_property.created">
    | WebhookEventDefinition<"custom_property.deleted">
    | WebhookEventDefinition<"custom_property.updated">;
  custom_property_values: WebhookEventDefinition<"custom_property_values.updated">;
  delete: WebhookEventDefinition<"delete">;
  dependabot_alert:
    | WebhookEventDefinition<"dependabot_alert.auto_dismissed">
    | WebhookEventDefinition<"dependabot_alert.auto_reopened">
    | WebhookEventDefinition<"dependabot_alert.created">
    | WebhookEventDefinition<"dependabot_alert.dismissed">
    | WebhookEventDefinition<"dependabot_alert.fixed">
    | WebhookEventDefinition<"dependabot_alert.reintroduced">
    | WebhookEventDefinition<"dependabot_alert.reopened">;
  deploy_key:
    | WebhookEventDefinition<"deploy_key.created">
    | WebhookEventDefinition<"deploy_key.deleted">;
  deployment: WebhookEventDefinition<"deployment.created">;
  deployment_protection_rule: WebhookEventDefinition<"deployment_protection_rule.requested">;
  deployment_review:
    | WebhookEventDefinition<"deployment_review.approved">
    | WebhookEventDefinition<"deployment_review.rejected">
    | WebhookEventDefinition<"deployment_review.requested">;
  deployment_status: WebhookEventDefinition<"deployment_status.created">;
  discussion:
    | WebhookEventDefinition<"discussion.answered">
    | WebhookEventDefinition<"discussion.category_changed">
    | WebhookEventDefinition<"discussion.closed">
    | WebhookEventDefinition<"discussion.created">
    | WebhookEventDefinition<"discussion.deleted">
    | WebhookEventDefinition<"discussion.edited">
    | WebhookEventDefinition<"discussion.labeled">
    | WebhookEventDefinition<"discussion.locked">
    | WebhookEventDefinition<"discussion.pinned">
    | WebhookEventDefinition<"discussion.reopened">
    | WebhookEventDefinition<"discussion.transferred">
    | WebhookEventDefinition<"discussion.unanswered">
    | WebhookEventDefinition<"discussion.unlabeled">
    | WebhookEventDefinition<"discussion.unlocked">
    | WebhookEventDefinition<"discussion.unpinned">;
  discussion_comment:
    | WebhookEventDefinition<"discussion_comment.created">
    | WebhookEventDefinition<"discussion_comment.deleted">
    | WebhookEventDefinition<"discussion_comment.edited">;
  fork: WebhookEventDefinition<"fork">;
  github_app_authorization: WebhookEventDefinition<"github_app_authorization.revoked">;
  gollum: WebhookEventDefinition<"gollum">;
  installation:
    | WebhookEventDefinition<"installation.created">
    | WebhookEventDefinition<"installation.deleted">
    | WebhookEventDefinition<"installation.new_permissions_accepted">
    | WebhookEventDefinition<"installation.suspend">
    | WebhookEventDefinition<"installation.unsuspend">;
  installation_repositories:
    | WebhookEventDefinition<"installation_repositories.added">
    | WebhookEventDefinition<"installation_repositories.removed">;
  installation_target: WebhookEventDefinition<"installation_target.renamed">;
  issue_comment:
    | WebhookEventDefinition<"issue_comment.created">
    | WebhookEventDefinition<"issue_comment.deleted">
    | WebhookEventDefinition<"issue_comment.edited">;
  issues:
    | WebhookEventDefinition<"issues.assigned">
    | WebhookEventDefinition<"issues.closed">
    | WebhookEventDefinition<"issues.deleted">
    | WebhookEventDefinition<"issues.demilestoned">
    | WebhookEventDefinition<"issues.edited">
    | WebhookEventDefinition<"issues.labeled">
    | WebhookEventDefinition<"issues.locked">
    | WebhookEventDefinition<"issues.milestoned">
    | WebhookEventDefinition<"issues.opened">
    | WebhookEventDefinition<"issues.pinned">
    | WebhookEventDefinition<"issues.reopened">
    | WebhookEventDefinition<"issues.transferred">
    | WebhookEventDefinition<"issues.unassigned">
    | WebhookEventDefinition<"issues.unlabeled">
    | WebhookEventDefinition<"issues.unlocked">
    | WebhookEventDefinition<"issues.unpinned">;
  label:
    | WebhookEventDefinition<"label.created">
    | WebhookEventDefinition<"label.deleted">
    | WebhookEventDefinition<"label.edited">;
  marketplace_purchase:
    | WebhookEventDefinition<"marketplace_purchase.cancelled">
    | WebhookEventDefinition<"marketplace_purchase.changed">
    | WebhookEventDefinition<"marketplace_purchase.pending_change">
    | WebhookEventDefinition<"marketplace_purchase.pending_change_cancelled">
    | WebhookEventDefinition<"marketplace_purchase.purchased">;
  member:
    | WebhookEventDefinition<"member.added">
    | WebhookEventDefinition<"member.edited">
    | WebhookEventDefinition<"member.removed">;
  membership:
    | WebhookEventDefinition<"membership.added">
    | WebhookEventDefinition<"membership.removed">;
  merge_group:
    | WebhookEventDefinition<"merge_group.checks_requested">
    | WebhookEventDefinition<"merge_group.destroyed">;
  meta: WebhookEventDefinition<"meta.deleted">;
  milestone:
    | WebhookEventDefinition<"milestone.closed">
    | WebhookEventDefinition<"milestone.created">
    | WebhookEventDefinition<"milestone.deleted">
    | WebhookEventDefinition<"milestone.edited">
    | WebhookEventDefinition<"milestone.opened">;
  org_block:
    | WebhookEventDefinition<"org_block.blocked">
    | WebhookEventDefinition<"org_block.unblocked">;
  organization:
    | WebhookEventDefinition<"organization.deleted">
    | WebhookEventDefinition<"organization.member_added">
    | WebhookEventDefinition<"organization.member_invited">
    | WebhookEventDefinition<"organization.member_removed">
    | WebhookEventDefinition<"organization.renamed">;
  package:
    | WebhookEventDefinition<"package.published">
    | WebhookEventDefinition<"package.updated">;
  page_build: WebhookEventDefinition<"page_build">;
  personal_access_token_request:
    | WebhookEventDefinition<"personal_access_token_request.approved">
    | WebhookEventDefinition<"personal_access_token_request.cancelled">
    | WebhookEventDefinition<"personal_access_token_request.created">
    | WebhookEventDefinition<"personal_access_token_request.denied">;
  ping: WebhookEventDefinition<"ping">;
  project_card:
    | WebhookEventDefinition<"project_card.converted">
    | WebhookEventDefinition<"project_card.created">
    | WebhookEventDefinition<"project_card.deleted">
    | WebhookEventDefinition<"project_card.edited">
    | WebhookEventDefinition<"project_card.moved">;
  project:
    | WebhookEventDefinition<"project.closed">
    | WebhookEventDefinition<"project.created">
    | WebhookEventDefinition<"project.deleted">
    | WebhookEventDefinition<"project.edited">
    | WebhookEventDefinition<"project.reopened">;
  project_column:
    | WebhookEventDefinition<"project_column.created">
    | WebhookEventDefinition<"project_column.deleted">
    | WebhookEventDefinition<"project_column.edited">
    | WebhookEventDefinition<"project_column.moved">;
  projects_v2:
    | WebhookEventDefinition<"projects_v2.closed">
    | WebhookEventDefinition<"projects_v2.created">
    | WebhookEventDefinition<"projects_v2.deleted">
    | WebhookEventDefinition<"projects_v2.edited">
    | WebhookEventDefinition<"projects_v2.reopened">;
  projects_v2_item:
    | WebhookEventDefinition<"projects_v2_item.archived">
    | WebhookEventDefinition<"projects_v2_item.converted">
    | WebhookEventDefinition<"projects_v2_item.created">
    | WebhookEventDefinition<"projects_v2_item.deleted">
    | WebhookEventDefinition<"projects_v2_item.edited">
    | WebhookEventDefinition<"projects_v2_item.reordered">
    | WebhookEventDefinition<"projects_v2_item.restored">;
  projects_v2_status_update:
    | WebhookEventDefinition<"projects_v2_status_update.created">
    | WebhookEventDefinition<"projects_v2_status_update.deleted">
    | WebhookEventDefinition<"projects_v2_status_update.edited">;
  public: WebhookEventDefinition<"public">;
  pull_request:
    | WebhookEventDefinition<"pull_request.assigned">
    | WebhookEventDefinition<"pull_request.auto_merge_disabled">
    | WebhookEventDefinition<"pull_request.auto_merge_enabled">
    | WebhookEventDefinition<"pull_request.closed">
    | WebhookEventDefinition<"pull_request.converted_to_draft">
    | WebhookEventDefinition<"pull_request.demilestoned">
    | WebhookEventDefinition<"pull_request.dequeued">
    | WebhookEventDefinition<"pull_request.edited">
    | WebhookEventDefinition<"pull_request.enqueued">
    | WebhookEventDefinition<"pull_request.labeled">
    | WebhookEventDefinition<"pull_request.locked">
    | WebhookEventDefinition<"pull_request.milestoned">
    | WebhookEventDefinition<"pull_request.opened">
    | WebhookEventDefinition<"pull_request.ready_for_review">
    | WebhookEventDefinition<"pull_request.reopened">
    | WebhookEventDefinition<"pull_request.review_request_removed">
    | WebhookEventDefinition<"pull_request.review_requested">
    | WebhookEventDefinition<"pull_request.synchronize">
    | WebhookEventDefinition<"pull_request.unassigned">
    | WebhookEventDefinition<"pull_request.unlabeled">
    | WebhookEventDefinition<"pull_request.unlocked">;
  pull_request_review_comment:
    | WebhookEventDefinition<"pull_request_review_comment.created">
    | WebhookEventDefinition<"pull_request_review_comment.deleted">
    | WebhookEventDefinition<"pull_request_review_comment.edited">;
  pull_request_review:
    | WebhookEventDefinition<"pull_request_review.dismissed">
    | WebhookEventDefinition<"pull_request_review.edited">
    | WebhookEventDefinition<"pull_request_review.submitted">;
  pull_request_review_thread:
    | WebhookEventDefinition<"pull_request_review_thread.resolved">
    | WebhookEventDefinition<"pull_request_review_thread.unresolved">;
  push: WebhookEventDefinition<"push">;
  registry_package:
    | WebhookEventDefinition<"registry_package.published">
    | WebhookEventDefinition<"registry_package.updated">;
  release:
    | WebhookEventDefinition<"release.created">
    | WebhookEventDefinition<"release.deleted">
    | WebhookEventDefinition<"release.edited">
    | WebhookEventDefinition<"release.prereleased">
    | WebhookEventDefinition<"release.published">
    | WebhookEventDefinition<"release.released">
    | WebhookEventDefinition<"release.unpublished">;
  repository_advisory:
    | WebhookEventDefinition<"repository_advisory.published">
    | WebhookEventDefinition<"repository_advisory.reported">;
  repository:
    | WebhookEventDefinition<"repository.archived">
    | WebhookEventDefinition<"repository.created">
    | WebhookEventDefinition<"repository.deleted">
    | WebhookEventDefinition<"repository.edited">
    | WebhookEventDefinition<"repository.privatized">
    | WebhookEventDefinition<"repository.publicized">
    | WebhookEventDefinition<"repository.renamed">
    | WebhookEventDefinition<"repository.transferred">
    | WebhookEventDefinition<"repository.unarchived">;
  repository_dispatch: WebhookEventDefinition<"repository_dispatch.sample.collected">;
  repository_import: WebhookEventDefinition<"repository_import">;
  repository_ruleset:
    | WebhookEventDefinition<"repository_ruleset.created">
    | WebhookEventDefinition<"repository_ruleset.deleted">
    | WebhookEventDefinition<"repository_ruleset.edited">;
  repository_vulnerability_alert:
    | WebhookEventDefinition<"repository_vulnerability_alert.create">
    | WebhookEventDefinition<"repository_vulnerability_alert.dismiss">
    | WebhookEventDefinition<"repository_vulnerability_alert.reopen">
    | WebhookEventDefinition<"repository_vulnerability_alert.resolve">;
  secret_scanning_alert:
    | WebhookEventDefinition<"secret_scanning_alert.created">
    | WebhookEventDefinition<"secret_scanning_alert.publicly_leaked">
    | WebhookEventDefinition<"secret_scanning_alert.reopened">
    | WebhookEventDefinition<"secret_scanning_alert.resolved">
    | WebhookEventDefinition<"secret_scanning_alert.validated">;
  secret_scanning_alert_location: WebhookEventDefinition<"secret_scanning_alert_location.created">;
  security_advisory:
    | WebhookEventDefinition<"security_advisory.published">
    | WebhookEventDefinition<"security_advisory.updated">
    | WebhookEventDefinition<"security_advisory.withdrawn">;
  security_and_analysis: WebhookEventDefinition<"security_and_analysis">;
  sponsorship:
    | WebhookEventDefinition<"sponsorship.cancelled">
    | WebhookEventDefinition<"sponsorship.created">
    | WebhookEventDefinition<"sponsorship.edited">
    | WebhookEventDefinition<"sponsorship.pending_cancellation">
    | WebhookEventDefinition<"sponsorship.pending_tier_change">
    | WebhookEventDefinition<"sponsorship.tier_changed">;
  star:
    | WebhookEventDefinition<"star.created">
    | WebhookEventDefinition<"star.deleted">;
  status: WebhookEventDefinition<"status">;
  sub_issues:
    | WebhookEventDefinition<"sub_issues.parent_issue_added">
    | WebhookEventDefinition<"sub_issues.parent_issue_removed">
    | WebhookEventDefinition<"sub_issues.sub_issue_added">
    | WebhookEventDefinition<"sub_issues.sub_issue_removed">;
  team_add: WebhookEventDefinition<"team_add">;
  team:
    | WebhookEventDefinition<"team.added_to_repository">
    | WebhookEventDefinition<"team.created">
    | WebhookEventDefinition<"team.deleted">
    | WebhookEventDefinition<"team.edited">
    | WebhookEventDefinition<"team.removed_from_repository">;
  watch: WebhookEventDefinition<"watch.started">;
  workflow_dispatch: WebhookEventDefinition<"workflow_dispatch">;
  workflow_job:
    | WebhookEventDefinition<"workflow_job.completed">
    | WebhookEventDefinition<"workflow_job.in_progress">
    | WebhookEventDefinition<"workflow_job.queued">
    | WebhookEventDefinition<"workflow_job.waiting">;
  workflow_run:
    | WebhookEventDefinition<"workflow_run.completed">
    | WebhookEventDefinition<"workflow_run.in_progress">
    | WebhookEventDefinition<"workflow_run.requested">;
};
export type WebhookEvent =
  | BranchProtectionConfigurationEvent
  | BranchProtectionRuleEvent
  | CheckRunEvent
  | CheckSuiteEvent
  | CodeScanningAlertEvent
  | CommitCommentEvent
  | CreateEvent
  | CustomPropertyEvent
  | CustomPropertyValuesEvent
  | DeleteEvent
  | DependabotAlertEvent
  | DeployKeyEvent
  | DeploymentEvent
  | DeploymentProtectionRuleEvent
  | DeploymentReviewEvent
  | DeploymentStatusEvent
  | DiscussionEvent
  | DiscussionCommentEvent
  | ForkEvent
  | GithubAppAuthorizationEvent
  | GollumEvent
  | InstallationEvent
  | InstallationRepositoriesEvent
  | InstallationTargetEvent
  | IssueCommentEvent
  | IssuesEvent
  | LabelEvent
  | MarketplacePurchaseEvent
  | MemberEvent
  | MembershipEvent
  | MergeGroupEvent
  | MetaEvent
  | MilestoneEvent
  | OrgBlockEvent
  | OrganizationEvent
  | PackageEvent
  | PageBuildEvent
  | PersonalAccessTokenRequestEvent
  | PingEvent
  | ProjectCardEvent
  | ProjectEvent
  | ProjectColumnEvent
  | ProjectsV2Event
  | ProjectsV2ItemEvent
  | ProjectsV2StatusUpdateEvent
  | PublicEvent
  | PullRequestEvent
  | PullRequestReviewCommentEvent
  | PullRequestReviewEvent
  | PullRequestReviewThreadEvent
  | PushEvent
  | RegistryPackageEvent
  | ReleaseEvent
  | RepositoryAdvisoryEvent
  | RepositoryEvent
  | RepositoryDispatchEvent
  | RepositoryImportEvent
  | RepositoryRulesetEvent
  | RepositoryVulnerabilityAlertEvent
  | SecretScanningAlertEvent
  | SecretScanningAlertLocationEvent
  | SecurityAdvisoryEvent
  | SecurityAndAnalysisEvent
  | SponsorshipEvent
  | StarEvent
  | StatusEvent
  | SubIssuesEvent
  | TeamAddEvent
  | TeamEvent
  | WatchEvent
  | WorkflowDispatchEvent
  | WorkflowJobEvent
  | WorkflowRunEvent;
export type WebhookEventMap = EventPayloadMap;
export type WebhookEventName = keyof EventPayloadMap;
