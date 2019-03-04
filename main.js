import DS from 'ember-data';
import EmberObject, { computed, get } from '@ember/object';
import parseResponseHeaders from 'ember-ajax/-private/utils/parse-response-headers';
import { all, resolve, Promise as EmberPromise } from 'rsvp';
import { schedule, next } from '@ember/runloop';
import { singularize } from 'ember-inflector';
