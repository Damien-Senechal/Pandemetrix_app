<template>
  <div class="etl-manager">
    <h1>Gestionnaire ETL</h1>
    <div class="etl-flex">
      <div class="etl-col">
        <h2>Upload CSV</h2>
        <CSVUploader @upload-success="handleUploadSuccess" @upload-error="handleUploadError" />
      </div>
      <div class="etl-col">
        <h2>Télécharger depuis une URL</h2>
        <URLDownloader @download-success="handleDownloadSuccess" @download-error="handleDownloadError" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CSVUploader from './CSVUploader.vue'
import URLDownloader from './URLDownloader.vue'

const jobs = ref([])
const loadingJobs = ref(false)
const deletingJobs = ref([])


const handleUploadError = (error) => { console.error('Erreur upload:', error) }
const handleDownloadError = (error) => { console.error('Erreur téléchargement:', error) }

const getStatusStyle = (status) => {
  switch (status) {
    case 'completed': return { background: '#eafaf1', color: '#28a745', border: '1px solid #28a745' }
    case 'processing': return { background: '#fffbe6', color: '#b8860b', border: '1px solid #b8860b' }
    case 'failed': return { background: '#faeaea', color: '#dc3545', border: '1px solid #dc3545' }
    default: return { background: '#f5f5f5', color: '#555', border: '1px solid #ccc' }
  }
}
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleString('fr-FR')
}
</script>

<style scoped>
.etl-manager {
  max-width: 900px; margin: 0 auto; padding: 2em 1em;
}

.etl-manager h1 {
  font-size: 2em; font-weight: bold; margin-bottom: 1.5em;
  color: var(--color-primary); text-align: center;
}

.etl-flex {
  display: flex; flex-wrap: wrap; gap: 2em; margin-bottom: 2em;
  justify-content: center;
}

.etl-col { flex: 1 1 320px; min-width: 320px; }

.etl-col h2 {
  font-size: 1.1em; font-weight: bold; margin-bottom: 0.7em;
  color: var(--color-text-primary);
}

.etl-jobs { margin-top: 2em; }

.etl-jobs-header {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 1em;
}

.etl-jobs-header h2 {
  font-size: 1.1em; font-weight: bold; color: var(--color-text-primary);
}

.etl-jobs-header button {
  background: var(--color-text-secondary); color: var(--color-bg-primary);
  padding: 0.5em 1em; border-radius: 4px; border: none;
  cursor: pointer; font-size: 1em; transition: background 0.2s;
}

.etl-jobs-header button:disabled {
  background: var(--color-text-disabled); cursor: not-allowed;
}

.etl-jobs-loading, .etl-jobs-empty {
  text-align: center; padding: 2em; color: var(--color-text-secondary);
}

.etl-job-card {
  background: var(--color-bg-primary); border: 1px solid var(--color-border);
  border-radius: 8px; padding: 1.2em 1em; margin-bottom: 1em;
  display: flex; justify-content: space-between; align-items: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.etl-job-card h3 {
  font-weight: bold; font-size: 1em; margin-bottom: 0.2em;
  color: var(--color-text-primary);
}

.etl-job-card p {
  font-size: 0.95em; color: var(--color-text-secondary); margin-bottom: 0.2em;
}

.etl-job-status {
  display: inline-block; padding: 0.2em 0.7em; border-radius: 3px;
  font-size: 0.9em; margin-top: 0.3em;
}

.etl-job-actions { display: flex; gap: 0.5em; }

.etl-job-actions button {
  background: var(--color-primary); color: var(--color-bg-primary);
  padding: 0.4em 1em; border-radius: 4px; border: none;
  cursor: pointer; font-size: 0.98em; transition: background 0.2s;
}

.etl-job-actions button.delete { background: var(--color-error); }

.etl-job-actions button:disabled {
  background: var(--color-text-disabled); cursor: not-allowed;
}

.spinner {
  margin: 0 auto; border: 4px solid var(--color-border);
  border-top: 4px solid var(--color-primary); border-radius: 50%;
  width: 32px; height: 32px; animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (max-width: 800px) {
  .etl-flex { flex-direction: column; gap: 1.5em; }
}
</style>