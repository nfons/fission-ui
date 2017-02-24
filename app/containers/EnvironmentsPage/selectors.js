import { createSelector } from 'reselect';

/**
 * Direct selector to the environmentsPage state domain
 */
const selectEnvironmentsListPageDomain = () => (state) => state.get('environments');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EnvironmentsPage
 */
const makeSelectLoading = () => createSelector(
  selectEnvironmentsListPageDomain(),
  (substate) => substate.get('loading')
);

const makeSelectError = () => createSelector(
  selectEnvironmentsListPageDomain(),
  (substate) => substate.get('error')
);

const makeSelectEnvironments = () => createSelector(
  selectEnvironmentsListPageDomain(),
  (substate) => substate.get('environments').map((e) => ({ name: e.metadata.name, image: e.runContainerImageUrl }))
);

export {
  makeSelectEnvironments,
  makeSelectError,
  makeSelectLoading,
};
